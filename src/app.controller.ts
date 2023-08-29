/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('template')
  sendEmail(@Body() API_KEY: string): string {
    return this.appService.sendEmail(API_KEY);
  }

  @Post('custom')
  sendCustomEmail(@Body() payload: any): string {
    return this.appService.sendCustomEmail(payload);
  }
}
