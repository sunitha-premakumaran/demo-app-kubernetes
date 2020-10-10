import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  array: string[];

  constructor(
    private httpSvc: HttpClient
  ) {
    this.array = ['hi', 'hello', 'bye'];
  }

  ngOnInit() {
    //api CALL
  }

  async addItem(item: string) {
    this.array.push(item);
    await this.httpSvc.post('http://localhost:30004/todos', { title: new Date().toString(), list: this.array }).toPromise();
  }

}
