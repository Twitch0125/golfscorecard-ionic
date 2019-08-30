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
      console.log(this.getPlayers(), 'added player');
    }
  }
  removePlayer(name: string) {
    console.log('removing player', name);

    this.players = this.players.filter(player => player.name !== name);
    console.log(this.players, 'removed player');
  }

  setPlayers(players: Player[]) {
    this.players = players;
  }

  getPlayers(): Player[] {
    return this.players;
  }

  updatePlayer(id: string, playerData: string) {
    this.players.map(player => {
      if (player.id === id) {
        return (player.name = playerData);
      }
    });
    console.log(
      this.players,
      'player with id: ',
      id,
      'name updated to: ',
      playerData
    );
  }
}
