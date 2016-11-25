import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'i18n' })
export class I18nPipe implements PipeTransform {
    
    transform(object: any) {
        return object.cz;
    }
}