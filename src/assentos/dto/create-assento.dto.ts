/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Assento } from "../entities/assento.entity";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAssentoDto extends Assento
{
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    vooId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nome: string;
    
}
