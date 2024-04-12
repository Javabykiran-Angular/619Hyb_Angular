import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onPage1(){
    this.router.navigate(['/Page1']);
  }

  onPage2(){
    this.myid=8;
    this.router.navigate(['/Page2',this.myid])
  }

  onFollower(){
    this.router.navigate(['/Follower']);
  }

}
