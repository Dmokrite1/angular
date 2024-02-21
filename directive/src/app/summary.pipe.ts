import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  standalone: true
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, maxLength: number = 20): string {
    if(value.length >= maxLength) {
    // Revoir la méthode slice (fonctionne sur les chaines de caractères comme sur les tableaux)
      return value.slice(0, maxLength) + '...';
    }
  
    return value;
  }
}
