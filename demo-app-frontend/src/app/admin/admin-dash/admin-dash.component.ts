import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss']
})
export class AdminDashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Component being initialized!!!");
  }

  ngOnDestroy() {
    console.log("Component being destroyed!!!!!!!!");
  }
}
