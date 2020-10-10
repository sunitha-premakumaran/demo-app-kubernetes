import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.scss']
})
export class DisplayItemComponent implements OnInit {

  @Input() incomingArray: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
