import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RequestMethod, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips away any unwanted property
      forbidNonWhitelisted: true, // throw validation error for unwanted property
      // transform: true, // transform the property with the defined dto type but impacts performance
    }),
  );
  app.setGlobalPrefix('/api/v1', {
    exclude: [{ path: '/health', method: RequestMethod.GET }],
  });

  /* This is setting up the swagger documentation for the API. */
  const config = new DocumentBuilder()
    .setTitle('Mealmate')
    .setDescription('Enjoy the meal, we will handle the bill!')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // expose swagger docs at /api
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });

  await app.listen(3000);
}
bootstrap();
