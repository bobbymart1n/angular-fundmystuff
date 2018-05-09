import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from './../info.model';
import { ItemService } from './../services/item.service';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css'],
  providers: [ItemService]
})
export class WishesComponent implements OnInit {
  fundings: FirebaseListObservable<any[]>;

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.fundings = this.itemService.getFundings();
  }

}
