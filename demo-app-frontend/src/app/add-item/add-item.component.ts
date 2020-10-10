import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  temporaryItem: string;

  @Output() addItemClicked: EventEmitter<string>;

  constructor() {
    this.addItemClicked = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  addItem() {
    this.addItemClicked.emit(this.temporaryItem);
    this.temporaryItem = '';
  }

}
