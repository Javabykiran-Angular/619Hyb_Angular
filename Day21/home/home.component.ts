import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empData:any[]=[];

  isSelect:boolean=false;
  recordId!:any;
  constructor(private service:HttpService,
              private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllEmp();
  }
  getAllEmp(){
    this.service.getAllRecord()
    .subscribe((response:any)=>{
      // console.log(response);
      this.empData=response;

    },(myerror)=>{
      alert("Somrting is went wrong....");
    });
  }

  onUpdate(){
    if(this.isSelect){
      // navigate to update record

      this.router.navigate(['/addemp',this.recordId]);

    }else{
      alert("Please Select A Record to be updated...")
    }
  }

  onRadio(id:any){
    this.isSelect=true;
    this.recordId=id;

  }

  onDelete(){
    if(this.isSelect){
      // delete Record

      if(confirm("Are you want to delete this Record"))
        {
          //delete

          this.service.deleteData(this.recordId)
          .subscribe((response)=>{
            alert(response);
            this.getAllEmp();
          })

        }
     // console.log(status);

    }else{
      alert("Please Select a Record to be deleted....")
    }
  }

}
