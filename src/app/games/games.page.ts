import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../shared/database.service';
import { Game } from '../game';
import { GolfCourseService } from '../api/golf-course.service';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PlayersService } from '../shared/players.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss']
})
export class GamesPage implements OnInit {
  games: Observable<Game[]>;
  constructor(
    private firebase: DatabaseService,
    private navCtrl: NavController,
    private coursesService: GolfCourseService,
    private playersService: PlayersService
  ) {}
  ngOnInit() {
    this.games = this.firebase.getGames();
  }

  handleClick(game: Game) {
    this.coursesService.setSelectedCourse(game.course);
    this.playersService.setPlayers(game.players);
    this.navCtrl.navigateForward('tabs/tab3');
  }

  getPlayerNames(game: Game): string {
    let playerString = '';
    game.players.forEach(player => playerString + ' ' + player.name);
    game.players.forEach(player => {
      console.log(player.name);
    });
    return playerString;
  }
}
