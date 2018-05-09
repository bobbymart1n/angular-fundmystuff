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
  fundings;

  constructor(private router: Router, private itemService: ItemService) { }

  goToItemPage(clickedItem) {
    this.router.navigate(['fundings', clickedItem.$key])
  }

  ngOnInit() {
    this.fundings = this.itemService.getFundings();
  }

}
