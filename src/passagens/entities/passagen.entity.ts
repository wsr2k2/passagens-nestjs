/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client'

export class Passagen implements Prisma.PassagensUncheckedCreateInput {
    nome_passageiro: string;
    cpf: string;
    companhiaId: number;
    vooId: number;
    assentos: number;
}
