import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import type { MicroserviceOptions } from '@nestjs/microservices';

import { MICROSERVICE_MANAGER_PORT } from '@ohbug-server/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: MICROSERVICE_MANAGER_PORT,
      },
    },
  );

  // tslint:disable-next-line:no-console
  app.listen(() => console.log(`Manager is running`));
}
bootstrap();
