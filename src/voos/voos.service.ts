/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVooDto } from './dto/create-voo.dto';
import { UpdateVooDto } from './dto/update-voo.dto';

@Injectable()
export class VoosService {
  constructor(private readonly db: PrismaService) {}

  async create(data: CreateVooDto) {
    const voo = await this.db.voos.create({ data })

    return voo;
  }

  async findAll() {
    return await this.db.voos.findMany()
  }

  async findOne(id: number) {
    const voo = await this.db.voos.findUnique({
      where: {
        id: id,
      },
      include: {
        assentos: {
          select: {
            id: true,
            nome: true,
          },
        },
      },
    });

    if(!voo) {
      throw new BadRequestException('Voo não localizado');
    }

    return voo;
  }

  async update(id: number, data: UpdateVooDto) {
    const voo = await this.db.voos.findUnique({
      where: {
        id: id,
      },
    });

    if (!voo) {
      throw new BadRequestException('Voo não localizado');
    }

    const novoVoo = await this.db.voos.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });

    return novoVoo;
  }

  async remove(id: number) {
    const voo = await this.db.voos.findUnique({
      where: {
        id: id,
      },
    });

    if (!voo) {
      throw new BadRequestException('Voo não localizado');
    }

    return await this.db.voos.delete({
      where: {
        id: id,
      },
    });
  }
}
