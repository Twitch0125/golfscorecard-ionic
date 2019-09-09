import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { Game } from '../game';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private gamesCollection: AngularFirestoreCollection<Game>;
  games: Observable<Game[]>;
  constructor(db: AngularFirestore) {
    this.gamesCollection = db.collection<Game>('games');
    this.games = this.gamesCollection.valueChanges();
  }
  addGameDocument(game: Game) {
    this.gamesCollection.add(game);
  }

  getGames(): Observable<Game[]> {
    return this.games;
  }
}
