import { Pipe, PipeTransform } from '@angular/core';
import { select } from 'ng2-redux';

@Pipe({ name: 'i18n' })
export class I18nPipe implements PipeTransform {
    
    transform(object: any) {
        return object.cz;
    }
}