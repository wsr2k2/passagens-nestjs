/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanhiaDto } from './create-companhia.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateCompanhiaDto extends PartialType(CreateCompanhiaDto) {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nome: string;
}
