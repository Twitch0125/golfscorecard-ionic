import * as uuid from 'uuid/v1';

import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

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
  readOnly = true;
  fabActivated = false;
  constructor(
    public playersService: PlayersService,
    public toastController: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit(): void {}
  addPlayer() {
    this.playersService.addPlayer({ name: this.currentPlayer, id: uuid() });
  }
  removePlayer(name: string) {
    this.playersService.removePlayer(name);
  }

  updatePlayer(id: string, playerName: string) {
    this.playersService.updatePlayer(id, playerName);
  }

  async handleFabClick() {
    this.fabActivated = !this.fabActivated;
    this.readOnly = !this.readOnly;
    const toast = await this.toastController.create({
      message: this.fabActivated ? 'Editing Players' : 'Saved Players',
      duration: 1000,
      color: this.fabActivated ? 'primary' : 'success',
      keyboardClose: this.fabActivated ? false : true,
      position: 'middle'
    });
    toast.present();
  }

  handleScorecardClick() {
    this.navCtrl.navigateForward('tabs/tab3');
  }
}
