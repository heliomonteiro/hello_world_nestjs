import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Pega uma instância da aplicação
  await app.listen(3000); //coloca na porta 3000
}
bootstrap(); // starta a aplicacao
