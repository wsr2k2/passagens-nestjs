/* eslint-disable prettier/prettier */
import { Prisma } from '@prisma/client';

export class Assento implements Prisma.AssentoUncheckedCreateInput
{
    id: number;
    vooId: number;
    nome: string;

}
