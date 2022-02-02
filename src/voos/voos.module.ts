import { Module } from '@nestjs/common';
import { VoosService } from './voos.service';
import { VoosController } from './voos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VoosController],
  providers: [VoosService]
})
export class VoosModule {}
