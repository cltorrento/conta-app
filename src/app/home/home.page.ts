import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public topic:any;
  public allUsers:any;

  constructor(public api:ApiService) {}
  ngOnInit() {
   this.getAll();
  }

  getAll(){
    this.api.getUsers().subscribe(result=>{
      this.allUsers = result;
      console.log(result);
    });
  }

  filter(){
    this.api.getSingleUser(this.topic).subscribe(result=>{
      this.allUsers = result;
      console.log(result);
    });
  }

}
