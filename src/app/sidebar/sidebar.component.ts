import { Component, OnInit } from '@angular/core';
import { Info } from './../info.model';
import { ItemService } from './../services/item.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ItemService]
})
export class SidebarComponent implements OnInit {
  infoId: string;
  donationClick = null
  infoToDisplay;
  constructor(private itemService: ItemService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.infoId = urlParameters['id'];
    });
    this.infoToDisplay = this.itemService.getItemById(this.infoId);
  }

  donationClicked(clickedDonation) {
    this.donationClick = true;
    console.log(this.donationClick);
  }

  progress() {

  }

}
