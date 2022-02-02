/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompanhiasService } from './companhias.service';
import { CreateCompanhiaDto } from './dto/create-companhia.dto';
import { UpdateCompanhiaDto } from './dto/update-companhia.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Companhias')
@Controller('companhias')
export class CompanhiasController {
  constructor(private readonly companhiasService: CompanhiasService) {}

  @Post()
  create(@Body() createCompanhiaDto: CreateCompanhiaDto) {
    return this.companhiasService.create(createCompanhiaDto);
  }

  @Get()
  findAll() {
    return this.companhiasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companhiasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanhiaDto: UpdateCompanhiaDto) {
    return this.companhiasService.update(+id, updateCompanhiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companhiasService.remove(+id);
  }
}
