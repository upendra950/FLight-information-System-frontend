import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { OutComponent } from "../out/out.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [FormsModule, RouterLink, HttpClientModule, OutComponent,CommonModule]
})
export class HomeComponent{
  fromcity='';
  tocity='';
  date='';
  disMsg="";
  trip='';
  valu:any;
  searchTriggered = false;

  constructor(private route:Router){
    

  }
  search(){
    if(this.fromcity.trim().length===0){
      this.disMsg='enter from city'
    }
    else if(this.tocity.trim().length===0){
      this.disMsg='enter to city'
    }
    else if(this.date.trim().length===0){
      this.disMsg='select date'
    }
    else if(this.trip.trim().length===0){
      this.disMsg="select trip type"
    }
    else{
      this.disMsg=''
      // this.searchTriggered=true
      const navigationExtras: NavigationExtras = {
        queryParams: {
          from: this.fromcity,
          to: this.tocity,
          date1: this.date,
          trip: this.trip
        }
      };

      this.route.navigate(["/out"],navigationExtras)
    

    }
  }
  
  // ngOnInit() {
  //   let values=this.http.get<any>('http://localhost:8080/city/getallcities');
  //   values.subscribe((data)=>this.valu=data);
  // }
  

}
