import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'price' })
export class PricePipe implements PipeTransform {
    
    transform(object: any, count: number): string {
        if( count ) {
            return (object.czk * count) + ' CZK';
        } else {
            return object.czk + ' CZK';
        }
    }
}