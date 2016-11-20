import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'categoryFilter' })
export class CategoryFilterPipe implements PipeTransform {
  transform(items: Array<any>, sectionId: number) {
    return items.filter( item => item.section_id === sectionId );
  }
}