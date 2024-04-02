import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=["Core Java","HTML,CSS,MySQL,JS","Advanced Java","Angular ","AWS","Docker","Jenkings"];
  
  arrproduct=[
      {
        name:"IPhone",
        price:125000,
        qty:1
      },
      {
        name:"Samsung",
        price:25000,
        qty:1
      },
      {
        name:"OnePlus",
        price:45000,
        qty:1
      },
      {
        name:"RealMe",
        price:18000,
        qty:1
      },
      {
        name:"Motorolla",
        price:30000,
        qty:1
      }


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
