import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const configSwagger = new DocumentBuilder().setTitle('Customers API').setDescription('API Made for Arnia students on first steps.').setVersion('1.0').addTag('customers').build()

  const document = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup('v1', app, document)


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  app.setGlobalPrefix('v1/');
  await app.listen(+configService.get('PORT') || 3000);
}
bootstrap();
