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

}
