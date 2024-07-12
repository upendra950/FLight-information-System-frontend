import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Console, error } from 'console';
import { __param } from 'tslib';

@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent {
  fromCity='';
  toCity='';
  flightNo='';
durationMinutes='';
arrivalTime='';
departureTime='';
aircraft='';
constructor(private http:HttpClient){

}
submit(){
   const queryparams={
    fromCity:this.fromCity,
    toCity:this.toCity,
     flightNo:this.flightNo,
    durationMinutes:this.durationMinutes,
     arrivalTime:this.arrivalTime,
     departureTime:this.departureTime,
    aircraft:this.aircraft,
  }
  
  this.http.post<any>("http://localhost:8080/flight/add-Flight",{queryparams}).subscribe((res)=>{console.log(res)

  },(err)=>{
    console.log(err)
  })
  console.log(queryparams)

}
}
