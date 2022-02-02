/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CompanhiasService } from './companhias.service';
import { CompanhiasController } from './companhias.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CompanhiasController],
  providers: [CompanhiasService],
})
export class CompanhiasModule {}
