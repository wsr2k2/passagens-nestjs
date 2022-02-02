import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssentosService } from './assentos.service';
import { CreateAssentoDto } from './dto/create-assento.dto';
import { UpdateAssentoDto } from './dto/update-assento.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Assentos')
@Controller('assentos')
export class AssentosController {
  constructor(private readonly assentosService: AssentosService) {}

  @Post()
  create(@Body() createAssentoDto: CreateAssentoDto) {
    return this.assentosService.create(createAssentoDto);
  }

  @Get()
  findAll() {
    return this.assentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssentoDto: UpdateAssentoDto) {
    return this.assentosService.update(+id, updateAssentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assentosService.remove(+id);
  }
}
