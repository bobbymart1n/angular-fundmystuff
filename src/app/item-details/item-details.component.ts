import { Component, OnInit } from '@angular/core';
import { Info } from './../info.model';
import { ItemService } from './../services/item.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  providers: [ItemService]
})
export class ItemDetailsComponent implements OnInit {
  infoId: string;
  infoToDisplay;
  constructor(private itemService: ItemService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.infoId = urlParameters['id'];
    });
    this.infoToDisplay = this.itemService.getItemById(this.infoId);
  }

}
