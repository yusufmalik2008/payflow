import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for Next.js
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // Connect to NATS as a microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: ['nats://localhost:4222'],
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001);
  
  console.log('🚀 Application is running on: http://localhost:3001');
  console.log('📡 NATS microservice is listening on: nats://localhost:4222');
}
bootstrap();
