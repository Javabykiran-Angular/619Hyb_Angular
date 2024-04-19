import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

 baseUrl:string='http://localhost:8080/api/'
  constructor(private http:HttpClient) { }

  getAllRecord(){
    return (this.http.get(`${this.baseUrl}getallEmp`));
  }

  getRecordById(id:any){
   return (this.http.get(`${this.baseUrl}getparticularEmp/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getallcountry`));
  }

  PostRecord(obj:any){
     return (this.http.post(`${this.baseUrl}addEmployee`,obj,{
        responseType:'text'
      }));
  }

}
