/* eslint-disable prettier/prettier */
import { Prisma } from "@prisma/client";

export class Companhia implements Prisma.CompanhiasUncheckedCreateInput
{
    id?: number;
    nome: string;
    voos?: Prisma.VoosUncheckedCreateNestedManyWithoutCompanhiasInput;
    
}