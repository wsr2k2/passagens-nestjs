import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VoosService } from './voos.service';
import { CreateVooDto } from './dto/create-voo.dto';
import { UpdateVooDto } from './dto/update-voo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Voos')
@Controller('voos')
export class VoosController {
  constructor(private readonly voosService: VoosService) {}

  @Post()
  create(@Body() createVooDto: CreateVooDto) {
    return this.voosService.create(createVooDto);
  }

  @Get()
  findAll() {
    return this.voosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVooDto: UpdateVooDto) {
    return this.voosService.update(+id, updateVooDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voosService.remove(+id);
  }
}
