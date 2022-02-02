import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PassagensService } from './passagens.service';
import { CreatePassagenDto } from './dto/create-passagen.dto';
import { UpdatePassagenDto } from './dto/update-passagen.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Passagens')
@Controller('passagens')
export class PassagensController {
  constructor(private readonly passagensService: PassagensService) {}

  @Post()
  create(@Body() createPassagenDto: CreatePassagenDto) {
    return this.passagensService.create(createPassagenDto);
  }

  @Get()
  findAll() {
    return this.passagensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passagensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePassagenDto: UpdatePassagenDto) {
    return this.passagensService.update(+id, updatePassagenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passagensService.remove(+id);
  }
}
