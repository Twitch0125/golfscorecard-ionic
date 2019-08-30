import { Component, OnInit } from '@angular/core';

import { Player } from '../types/player';
import { PlayersService } from '../shared/players.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  players: Player[];
  playerCount: number;
  currentPlayer: string;
  constructor(public playersService: PlayersService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  addPlayer() {
    this.playersService.addPlayer({ name: this.currentPlayer });
  }
  removePlayer(name: string) {
    this.playersService.removePlayer(name);
  }
}
