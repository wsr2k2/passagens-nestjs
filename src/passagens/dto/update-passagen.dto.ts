/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreatePassagenDto } from './create-passagen.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdatePassagenDto extends PartialType(CreatePassagenDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome_passageiro: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  companhiaId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  vooId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  assentos: number;
}
