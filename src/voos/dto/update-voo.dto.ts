/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateVooDto } from './create-voo.dto';
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, IsDateString } from "class-validator";

export class UpdateVooDto extends PartialType(CreateVooDto) {

    @IsNotEmpty()
    @IsDateString()
    hora_partida: Date;

    @IsNotEmpty()    
    @IsDateString()
    hora_chegada: Date;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    aeroporto_origem: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    aeroporto_destino: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    quantidadeAssentos: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    preco_passagem: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    companhiaId: number;
}
