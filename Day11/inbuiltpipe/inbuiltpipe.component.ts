import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltpipe',
  templateUrl: './inbuiltpipe.component.html',
  styleUrls: ['./inbuiltpipe.component.css']
})
export class InbuiltpipeComponent implements OnInit {

  strdata:string="u R Learn angular from Sumit raokhande trainer"
  
  mydate=new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
