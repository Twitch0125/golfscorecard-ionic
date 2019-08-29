import { Injectable } from '@angular/core';
import { Player } from '../types/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private players: Player[];

  constructor() {}
  setPlayers(players: Player[]) {
    this.players = players;
  }

  getPlayers(): Player[] {
    return this.players;
  }
}
