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

  addItem(newItem: Info) {
    this.fundings.push(newItem);
  }
  addDonation(itemId, donation) {
    let itemInFirebase = this.getItemById(itemId.$key);
    itemInFirebase.update({donations: itemId.donations += parseInt(donation)});
  }
  getItemById(infoId: string){
    return this.database.object('fundings/' + infoId);
  }

}
