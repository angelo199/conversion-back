/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, UseGuards, Request, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CurrencyService } from 'src/services/currency/currency.service';

@Controller()
export class CurrencyController {
    constructor(private currencyService : CurrencyService){}
    @UseGuards(AuthGuard('jwt'))
    @Get('currency')
    async getCurrency() {
      return await this.currencyService.getCurrency();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('currency/convert')
    async convert(@Body() body: any) {
      return await this.currencyService.getConvert(body);
    }
}
