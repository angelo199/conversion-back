/*
https://docs.nestjs.com/providers#services
*/

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class CurrencyService {
    constructor(private readonly httpService: HttpService) {}
    getCurrency(): Observable<any[]> {
        return this.httpService.get('https://api.fastforex.io/currencies?api_key=demo')
        .pipe(
            map(response => response.data)
        );
    }

    getConvert(data:any): Observable<any[]> {
        console.log(`https://api.fastforex.io/convert?from=${data.from}&to=${data.to}&amount=${data.amount}&api_key=demo`)
        return this.httpService.get(`https://api.fastforex.io/convert?from=${data.from}&to=${data.to}&amount=${data.amount}&api_key=demo`)
        .pipe(
            map(response => response.data)
        );
    }
}
