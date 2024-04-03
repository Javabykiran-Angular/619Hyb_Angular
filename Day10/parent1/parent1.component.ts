import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  strname:string="U are learn Angular 12";

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
