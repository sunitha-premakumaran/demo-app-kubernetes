import { Component } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  array: string[];

  constructor(private itemSvc: ItemService) {
    this.array = this.itemSvc.array;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  async addItem(item: string) {
    await this.itemSvc.addItem(item);
    alert("Created successfully");
  }

  ngOnDestroy() {

  }
}

export interface Item {
  name: string;
  value: string;
}
