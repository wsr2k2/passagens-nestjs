import { Module } from '@nestjs/common';
import { AssentosService } from './assentos.service';
import { AssentosController } from './assentos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AssentosController],
  providers: [AssentosService]
})
export class AssentosModule {}
