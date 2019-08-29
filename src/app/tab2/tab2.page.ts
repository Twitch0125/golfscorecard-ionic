import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  players = [];
  playerCount: number;
  currentPlayer: string;
  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  handleIonRangeChange() {
    console.log('range change', this.playerCount);
    this.players.length = this.playerCount;
    console.log(this.players);
  }
  handleIonInputChange() {
    console.log('currentPlayer', this.currentPlayer);
  }
}
