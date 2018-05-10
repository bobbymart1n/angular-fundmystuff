import { Component, OnInit } from '@angular/core';
import { Info } from './../info.model';
import { ItemService } from './../services/item.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ItemService]
})
export class UserComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  submitForm(image: string, title: string, description: string, fullStory: string, goal: number, donations: number) {
    let newItem: Info = new Info(image, title, description, fullStory, goal, donations);
    this.itemService.addItem(newItem);
    console.log(newItem);
  }

}
