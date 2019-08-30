import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teeTypes'
})
export class TeeTypesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
