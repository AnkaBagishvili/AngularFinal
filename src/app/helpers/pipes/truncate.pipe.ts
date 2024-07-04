import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    const words: string[] = value.split(/\s+/);
    if (words.length > limit) {
      if (limit < 0) {
        limit *= -1;
        return '...' + words.slice(words.length - limit).join(' ');
      } else {
        limit += 1;
        return words.slice(0, limit).join(' ') + '...';
      }
    }

    return value;
  }
}
