import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'freeze',
  standalone: true
})
export class FreezePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const splitted = value.split(" ");
    const mapped = splitted.map(splittedWord => args[0] ?? "Freeze")
    return mapped.join(' ');
  }
}
