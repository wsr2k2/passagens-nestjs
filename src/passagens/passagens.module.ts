import { Module } from '@nestjs/common';
import { PassagensService } from './passagens.service';
import { PassagensController } from './passagens.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PassagensController],
  providers: [PassagensService]
})
export class PassagensModule {}
