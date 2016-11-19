import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'categoryFilter' })
export class CategoryFilterPipe implements PipeTransform {
  transform(items: Array<any>, category: number) {
    return items.filter( item => item.category_id === category );
  }
}