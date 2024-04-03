import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  strDataReceived:string='';

  arrData:any[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
