import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clippara'
})
export class ClipparaPipe implements PipeTransform {

  transform(value: any): any {
    console.log(value.length);
    return value = value.substring(0,100);

  }

}
