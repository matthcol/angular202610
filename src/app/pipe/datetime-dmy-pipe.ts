import { DatePipe } from '@angular/common';
import { inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetimeDmy',
})
export class DatetimeDmyPipe implements PipeTransform {
  private internalPipe = inject(DatePipe)

  transform(value: Date | string | undefined | null): string | null {
    return this.internalPipe.transform(value, 'dd/MM/yyyy HH:mm');
  }
}
