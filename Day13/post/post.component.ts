import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend(){
      this.service.getRecord()
      .subscribe((myresponse:any)=>{
        //console.log(myresponse);
        this.posts=myresponse;

      });

  }



}
