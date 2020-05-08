import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // rota raiz "/"
export class AppController {
  constructor(private readonly appService: AppService) {} // Construtor recebe AppService

  //Ações do Controller
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
