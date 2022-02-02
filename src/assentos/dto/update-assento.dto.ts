/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateAssentoDto } from './create-assento.dto';

export class UpdateAssentoDto extends PartialType(CreateAssentoDto) {
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    vooId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    nome: string;
}
