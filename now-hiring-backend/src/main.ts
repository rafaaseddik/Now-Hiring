import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {ErrorFilter} from "./exceptions/error.exception";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
      .setTitle('Now Hiring')
      .setDescription('The "Now Hiring" Official backend documentation')
      .setVersion('1.0')
      .addTag('Auth')
      .build();

  const CORSoptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials":true
  }
  app.enableCors(CORSoptions);
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  //app.useGlobalFilters(new ErrorFilter())
  await app.listen(3000);
}
bootstrap();
