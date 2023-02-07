import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const config = new DocumentBuilder()
    .setTitle('Kilimall Api')
    .setDescription('Live shopping App')
    .setVersion('1.0')
    .addTag('Kilimall-clone')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('kilimall', app, document);

  await app.listen(3000, '192.168.0.104');

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
