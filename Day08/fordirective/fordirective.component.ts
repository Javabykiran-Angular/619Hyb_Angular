import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=["Core Java","HTML,CSS,MySQL,JS","Advanced Java","Angular ","AWS","Docker","Jenkings"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
