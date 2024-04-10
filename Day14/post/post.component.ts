import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id!:number;
  title:string='';
  body:string='';
  isHidden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend(){
      this.service.getRecord()
      .subscribe((myresponse:any)=>{
        //console.log(myresponse);
        this.posts=myresponse;

      },(myerror)=>{
        alert("Error is Occured....")
      });

  }

  onClick(inputTitle:any,inputBody:any){
    let obj={
      title:inputTitle,
      body:inputBody
    }
  this.service.postData(obj)
  .subscribe((response)=>{
    console.log(response);
  });

  }

  onEdit(item:any){
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  onUpdate(){

    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }


    this.service.updateData(obj)
    .subscribe((response)=>{
      console.log(response);
      this.isHidden=true;
    })


  }

  onDelete(id:any){
    this.service.deleteData(id)
    .subscribe((response)=>{
      console.log(response);
    })
  }



}
