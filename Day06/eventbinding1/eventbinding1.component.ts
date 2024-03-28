import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  count:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onSend():void{

    if(this.count==0){
      console.log("Click event occur ")
      this.count++;
    }

     }

     onImage(){
      console.log("On Image Click...")
     }

     onDollerEvent(myevent:any){
        console.log(myevent);
        console.log(myevent.target.value);
     }


}
