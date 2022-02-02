/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('API-Passagens') 
    .setDescription('Projeto para venda de passagens aéreas.') 
    .setVersion('1.0.0')
    .addTag('Companhias') 
    .addTag('Voos') 
    .addTag('Assentos') 
    .addTag('Passagens')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);


  await app.listen(process.env.PORT || 3000);
}
bootstrap();
