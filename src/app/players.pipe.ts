import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'players'
})
export class PlayersPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
