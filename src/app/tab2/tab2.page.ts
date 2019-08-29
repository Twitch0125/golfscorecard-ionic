import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  players = [];
  value: 1;
  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  handleIonRangeChange() {
    console.log('range change', this.value);
    this.players.length = this.value;
    console.log(this.players);
  }
  handleIonInputChange() {}
}
