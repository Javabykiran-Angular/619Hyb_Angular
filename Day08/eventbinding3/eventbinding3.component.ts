import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {
  result!:number;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    console.log("Change Event Occur...")
  }

  onKeyup(){
    console.log("Key Up Event Occur...")
  }
  onKeydown(){
    console.log("Key Down event Occur...")
  }

}
