import { Component, OnInit } from '@angular/core';

import {courseService} from '../utility/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:string[]=[];

  constructor(private service:courseService) { 
   // let service=new courseService();
   // this.courses= service.getCourse();

  }

  ngOnInit(): void {
    this.courses= this.service.getCourse();
  }

}
