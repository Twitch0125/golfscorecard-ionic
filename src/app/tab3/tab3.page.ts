import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Course } from '../types/course';
import { DatabaseService } from '../shared/database.service';
import { GolfCourseService } from '../api/golf-course.service';
import { Hole } from '../types/hole';
import { Player } from '../types/player';
import { PlayersService } from '../shared/players.service';
import { TeeBox } from '../types/tee-box';
import { TeeType } from '../types/tee-type.enum';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  course: Course;
  teeType: TeeType;
  holes: Hole[];
  players: Player[];

  constructor(
    private courseService: GolfCourseService,
    private playersService: PlayersService,
    private firebase: DatabaseService
  ) {}
  ngOnInit() {
    this.course = this.courseService.getSelectedCourse();
    console.log('selected course', this.course);
    this.players = this.playersService.getPlayers();
    console.log('players', this.players);
  }

  setScoreCard() {
    console.log('setting score card');
    const logType = () => console.log(this.teeType);
    console.log('this.course setScoreCard()', this.course);
    this.course = this.courseService.getSelectedCourse();

    this.holes = this.course.holes.map((currentHole, index) => {
      for (let i = 0; i < currentHole.teeBoxes.length; i++) {
        console.log(this.teeType);

        if (currentHole.teeBoxes[i].teeType === this.teeType) {
          let newTeeBoxes: TeeBox[] = [];
          newTeeBoxes.push(currentHole.teeBoxes[i]);
          currentHole.teeBoxes = newTeeBoxes;
        }
      }
      return currentHole;
    });
    console.log('this.holes', this.holes);
  }

  addScore(player: Player, index: number, score: any) {
    console.log('player', player, 'score: ', score, 'index: ', index);
    console.log('score', score);
    let numScore;
    if (!score) {
      numScore = 0;
    } else {
      numScore = parseInt(score);
    }

    player.scores[index] = numScore;

    console.log(player.scores);

    console.log('adding score', score);

    this.playersService.updatePlayerScore(player, player.scores);

    console.log(this.players);
    console.log(
      this.players[0].scores.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      )
    );
  }

  saveGame() {
    this.firebase.addGameDocument({
      course: this.courseService.getSelectedCourse(),
      players: this.playersService.getPlayers(),
      teeType: this.teeType
    });
  }
}
