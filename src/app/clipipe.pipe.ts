import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'clipipe'
})
export class ClipipePipe implements PipeTransform {

  transform(value, searchvalue: string): any {
    //   console.log(value);
    // if(searchvalue != null){
    //   var reg1 = new RegExp("^" + searchvalue);
    //   var s = value.match(reg1);
    //   console.log(s);
    //   return s;
    // } else {
    //   return value;
    // }
if(!searchvalue) {
  return value;
} else {
  return value.filter(value1 => value1.toLowerCase().includes(searchvalue.toLowerCase()));
}


  }

}
