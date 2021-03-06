import { Component, OnInit } from '@angular/core';
import { Info } from './../info.model';
import { ItemService } from './../services/item.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ItemService]
})
export class SidebarComponent implements OnInit {
  infoId: string;
  donationClick = null;
  infoToDisplay;
  closeResult: string;
  constructor(private itemService: ItemService, private route: ActivatedRoute, private location: Location, private modalService: NgbModal) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.infoId = urlParameters['id'];
    });
    this.itemService.getItemById(this.infoId).subscribe(dataLastEmittedFromObserver => {
      this.infoToDisplay = dataLastEmittedFromObserver;
    })
  }

  currentProgress(progress) {
    progress = this.infoToDisplay.donations
    let goal = this.infoToDisplay.goal
    return progress / goal * 100 + "%"
  }

  donationClicked(clickedDonation) {
    this.donationClick = true;
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  submitDonation(itemId, newDonation) {
    this.itemService.addDonation(itemId, parseInt(newDonation));
  }


}
