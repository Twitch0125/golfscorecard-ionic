import { Injectable } from '@angular/core';
import { Player } from '../types/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private players = [];

  constructor() {}

  addPlayer(player: Player) {
    if (this.players.length <= 4 && player.name != undefined) {
      this.players.push(player);
    }
  }
  removePlayer(name: string) {
    this.players = this.players.filter(player => player.name != name);
    console.log(this.players, 'removed player');
  }

  setPlayers(players: Player[]) {
    this.players = players;
  }

  getPlayers(): Player[] {
    return this.players;
  }
}
