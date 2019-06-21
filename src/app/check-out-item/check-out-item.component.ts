import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out-item',
  templateUrl: './check-out-item.component.html',
  styleUrls: ['./check-out-item.component.css']
})
export class CheckOutItemComponent implements OnInit {
constructor() { }
arrProducts=[];
  ngOnInit() {
    this.arrProducts=JSON.parse(localStorage.getItem('checkOutList'));
  }

}
