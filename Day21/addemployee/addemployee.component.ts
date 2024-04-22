import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  addData:Employee=<Employee>{};
  allcountry:any[]=[];
updatedata:boolean=false;
  constructor(private service:HttpService,
              private router:Router,
              private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCountry();
    this.getDataFromUrl();
  }
  getCountry(){
      this.service.getAllCountry()
      .subscribe((response:any)=>{
        this.allcountry=response;
      })
  }

  getDataFromUrl(){

    this.route.paramMap
    .subscribe((param:any)=>{
     // console.log(param.get("id"));
      this.service.getRecordById(param.get("id"))
      .subscribe((response:any)=>{
        console.log(response);
        this.addData=response;
        this.updatedata=true;
      })
    })

  }

  onSubmit(){
    

   

    if(this.updatedata){
      //Update The Record
      //alert("update record")

      this.addData.updateddtm=Date.now();
      this.addData.updatedby="Anil";

     // console.log(this.addData);

      this.service.updateRecord(this.addData)
      .subscribe((response)=>{
        //console.log(response);
        this.router.navigate(['']);
      })


    }else{

      this.addData.createddtm=Date.now();
      this.addData.createdby="Admin";
      this.addData.updateddtm=Date.now();
      this.addData.updatedby="Admin";

      this.service.PostRecord(this.addData)
      .subscribe((response)=>{
        // console.log(response);
        this.router.navigate(['']);
  
      })
    }

    

  }

}
