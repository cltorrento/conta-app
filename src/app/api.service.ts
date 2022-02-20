import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }


  getUsers(){
    return this.http.get('http://localhost:8080/api/v1/all');
  }

  getSingleUser(topic:string){
    return this.http.get('http://localhost:8080/api/v1/find/'+topic);
  }
}
