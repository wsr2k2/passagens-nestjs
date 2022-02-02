/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, IsDateString, IsDate } from "class-validator";

export class CreateVooDto {

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    hora_partida: Date;

    @IsNotEmpty()    
    @IsDate()
    @Type(() => Date)
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
