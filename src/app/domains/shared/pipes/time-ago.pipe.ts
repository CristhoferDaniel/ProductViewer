import { Pipe, PipeTransform } from '@angular/core';
//import { formatDistance, formatDistanceToNow   } from 'date-fns';
import { formatDistance, formatDistanceToNow } from 'date-fns';
import { es, ptBR } from 'date-fns/locale';
@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    const today = new Date();
     return formatDistance(date, today);}

  //otra forma
   //  return formatDistanceToNow(new Date(value));
  //idioma
	// return formatDistanceToNow(
	// 	new Date(value), {
	// 	//addSuffix: true,
	// 	locale: es
	// 	})
  // }

}
