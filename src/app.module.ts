import { CurrencyModule } from './modules/currency/currency.module';
import { CurrencyService } from './services/currency/currency.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CurrencyController } from './controller/currency/currency.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    HttpModule, CurrencyModule, AuthModule, UsersModule],
  controllers: [
    AppController,
    CurrencyController
  ],
  providers: [
    CurrencyService, AppService],
})
export class AppModule { }
