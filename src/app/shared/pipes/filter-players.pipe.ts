import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../models/data';

@Pipe({
  name: 'filterPlayers'
})
export class FilterPlayersPipe implements PipeTransform {

  transform(value: Iplayer[], searchText: string): Iplayer[] {
    if (!value) {
      return []
    }

    if (!searchText) {
      return value
    }

    let filterdArray = value.filter(playObj => {
      return playObj.team.toLowerCase().startsWith(searchText.toLowerCase())
    })

    return filterdArray
  }

}
