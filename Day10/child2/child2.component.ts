import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output()  childStrEvent=new EventEmitter();

  @Output() childArrProdEvent= new EventEmitter();
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


  strdata:string="Hopes So u r enjoying Angular Module...";



  constructor() { }

  ngOnInit(): void {

  }

  onSend(){
      this.childStrEvent.emit(this.strdata)
      this.childArrProdEvent.emit(this.arrproduct);
  }

}
