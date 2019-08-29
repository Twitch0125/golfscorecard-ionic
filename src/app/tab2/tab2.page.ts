import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  players = [];
  value: number;
  constructor() {}

  handleIonRangeChange() {
    console.log('range change', this.value);
    this.players.length = this.value;
    console.log(this.players);
  }
  handleIonInputChange() {}
}
