import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  result!:number;
  name:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(myinput:any){
    console.log(myinput)
    console.log(myinput.value);

    myinput.style.background="green";
    myinput.style.color="white";

  }

  onClick1(myvalue:string){
    console.log(myvalue)
  }

  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;


    // this.result=num1+num2;
    this.result=n1+n2;

  }

}
