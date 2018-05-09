import { Injectable } from '@angular/core';
import { Info } from './../info.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ItemService {
  infoId: number;
  fundings: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.fundings = database.list('fundings');
  }

  getFundings() {
    return this.fundings;
  }

  getItemById(infoId: number){
    return this.database.object('fundings/' + infoId);
  }

}
