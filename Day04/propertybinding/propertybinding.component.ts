import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  name:string='Sumit raokhande';

  imgUrl:string='../../assets/tka.jpeg';

  isHidden:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
