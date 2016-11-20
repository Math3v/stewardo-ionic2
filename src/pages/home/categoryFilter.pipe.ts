import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'categoryFilter' })
export class CategoryFilterPipe implements PipeTransform {
  transform(items: Array<any>, foodType: number) {
    return items.filter( item => item.food_type === foodType );
  }
}