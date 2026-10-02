import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourMinutePipe',
})
export class HourMinutePipePipe implements PipeTransform {
  transform(value: number | undefined): string | undefined {
    if (!value) return undefined
    const durationHour = Math.floor(value / 60);
    const durationMinute = value % 60;
    
    return `${durationHour}h${durationMinute.toString().padStart(2, '0')}`;
  }
}
