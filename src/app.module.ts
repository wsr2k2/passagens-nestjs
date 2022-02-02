import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanhiasModule } from './companhias/companhias.module';
import { VoosModule } from './voos/voos.module';
import { PrismaModule } from './prisma/prisma.module';
import { PassagensModule } from './passagens/passagens.module';
import { AssentosModule } from './assentos/assentos.module';

@Module({
  imports: [
    CompanhiasModule,
    VoosModule,
    PrismaModule,
    PassagensModule,
    AssentosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
