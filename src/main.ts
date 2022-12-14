import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  const configService = app.get(ConfigService);

  const port = configService.get<number>('SERVER_PORT')
  await app.listen(port);
  console.log(`listening on port ${await app.getUrl()}`)
}
bootstrap();
