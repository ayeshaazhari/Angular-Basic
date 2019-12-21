import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'zodiacpipe'
})
export class ZodiacpipePipe implements PipeTransform {

  transform(value: any,search2: string): string {
    if(!value && !search2){
      return "Your Zodiac Sign";
    } else {
    console.log(search2);
     var reg1 = /\s([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}\s/;
     var matched =search2.match(reg1);
      if(matched == null) {
        return "Enter correct date in the format dd/mm/yyyy";
      } else {
     var d = matched[0];


    var check = moment(d, 'DD/MM/YYYY');
    
     var month = +check.format('M');
     var day:number;
     day   = +check.format('D');
     var year  = check.format('YYYY');
     var zadiac;

     switch(month) {
      case 1 : if(day < 19) { zadiac = "Capricorn"; } else { zadiac = "Aquarius"; }
       break;
       case 2 : if(day < 19) { zadiac = "Aquarius"; } else { zadiac = "Pisces"; }
       break;
       case 3 : if(day < 21) { zadiac = "Pisces"; } else { zadiac = "Aries"; }
       break;
       case 4 : if(day < 20) { zadiac = "Aries"; } else { zadiac = "Taurus"; }
       break;
       case 5 : if(day < 21) { zadiac = "Taurus"; } else { zadiac = "Gemini"; }
       break;
       case 6 : if(day < 21) { zadiac = "Gemini"; } else { zadiac = "Cancer"; }
       break;
       case 7 : if(day < 23) { zadiac = "Cancer"; } else { zadiac = "Leo"; }
       break;
       case 8 : if(day < 23) { zadiac = "Leo"; } else { zadiac = "Virgo"; }
       break;
       case 9 : if(day < 23) { zadiac = "Virgo"; } else { zadiac = "Libra"; }
       break;
      case 10 : if(day < 19) { zadiac = "Libra"; } else { zadiac = "Scorpio"; }
       break;
       case 11 : if(day < 19) { zadiac = "Scorpio"; } else { zadiac = "Sagittarius"; }
       break;
      case 12 : if(day < 19) { zadiac = "Sagittarius"; } else { zadiac = "Capricorn"; }
        break;
}
    console.log(d);
    return "Your Zodiac Sign is : " + zadiac;
}
    }
}
}


