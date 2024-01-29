import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteFormat',
  standalone: true
})
export class NoteFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toFixed(1)
  }

}
