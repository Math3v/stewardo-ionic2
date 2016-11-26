import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'price' })
export class PricePipe implements PipeTransform {
    
    transform(object: any): string {
        return object.czk + ' CZK';
    }
}