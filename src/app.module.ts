import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesteController } from './teste/teste.controller';

//módulo raiz
@Module({ //ES7 Decorators não é do typescript está no próprio javascript // permite configurar módulo sem colocar dentro da classe
  imports: [], // Não possui nenhum módulo
  controllers: [AppController, TesteController], // AppController dentro do módulo // É ligado com uma rota
  providers: [AppService], // Serviço é uma lógica que consegue utilizar em qualquer parte da aplicação
})
export class AppModule {}
