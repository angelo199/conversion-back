import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CurrencyService } from 'src/services/currency/currency.service';

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
    ],
    providers: [CurrencyService],
    exports: [CurrencyService]
})
export class CurrencyModule { }
