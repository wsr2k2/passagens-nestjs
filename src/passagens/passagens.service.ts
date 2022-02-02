/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePassagenDto } from './dto/create-passagen.dto';
import { UpdatePassagenDto } from './dto/update-passagen.dto';
import { Passagens } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PassagensService {
  constructor(private readonly db: PrismaService) {}
  
  async create(data: CreatePassagenDto) {
    const horaVoo = await this.db.voos.findFirst({
      where: {
        id: data.vooId,
      },
      select: {
        hora_partida: true,
      }      
    })
    
    const date = new Date();
    date.setHours(date.getHours()-1)
    
    // Validação para saber se está a menos de 1 hora da decolagem do voo
    if( horaVoo.hora_partida < date ) {
      throw new BadRequestException('O voo está a menos de 1 hora da decolagem, não é possível efeutar sua reserva!')
    }
   
    const assento = await this.db.assento.findFirst({
      where: {
        id:data.assentos
      }
    });

    // Validação para saber se o assento está ocupado
    if (assento) {
      throw new BadRequestException('Assento ocupado');
    }

    const totalAssentos = await this.db.voos.findFirst({
      where : {
        id: data.vooId,
      },
      select: {
        quantidadeAssentos: true,
        _count: {
          select: {
            assentos: true,
          },
        },
      },
    });

    const { quantidadeAssentos, _count } = totalAssentos;

    // Validação para saber se ainda existem assentos disponíveis
    if(quantidadeAssentos == _count.assentos) {
      throw new BadRequestException('Não há mais assentos disponíveis');
    }

    // Validação para saber se o assento existe
    if(quantidadeAssentos < data.assentos || data.assentos < 1) {
      throw new BadRequestException('Assento escolhido não existe')
    }

    // Cria a reserva
    await this.db.assento.create({
      data: {
        id: data.assentos,
        nome: data.nome_passageiro,
        vooId: data.vooId,
      },
    });

    return this.db.passagens.create({ data });
  }

  async findAll(): Promise<Passagens[]> {
    return await this.db.passagens.findMany({
      include: {
        companhias: true,
        voos: true
      } });
  }

  async findOne(id: number) {
    const reserva = await this.db.passagens.findUnique({
      where: {
        id: id,
      },
      include: {
        companhias: true,
        voos: true
      }
    })
    if (!reserva) {
      throw new BadRequestException('Reserva não existe');
    }
    return reserva;
  }

  async update(id: number, data: UpdatePassagenDto) {
    const reserva = await this.db.passagens.findUnique({ 
      where: {
        id: id,
      }
    })

    if (!reserva) {
      throw new BadRequestException('Reserva não existe');
    }

    const novaReserva = await this.db.passagens.update({
      where: {
        id: id,
      },
        data: {
          ...data,
        }
    })

    return novaReserva;
  }

  async remove(id: number) {
    const reserva = await this.db.passagens.findUnique({ 
      where: {
        id: id,
      },
    });

    if (!reserva) {
      throw new BadRequestException('Reserva não existe');
    }

    await this.db.passagens.delete({
      where: {
        id: id
      }
    })

    const assento = await this.db.assento.findFirst({
      where: {
        id: reserva.assentos
      }
    })

    if (!assento) {
      throw new BadRequestException('Assento não existe');
    }

    const novoAssento = await this.db.assento.delete({
      where: {
        id: reserva.assentos
      }
    })

    return novoAssento;

  } 
}
