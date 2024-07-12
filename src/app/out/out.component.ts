import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-out',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './out.component.html',
  styleUrl: './out.component.css'
})
export class OutComponent implements OnInit{
  valu:any;
  // @Input() fromCity: string = '';
  // @Input() toCity: string = '';
  // @Input() date: string = '';
  // @Input() trip: string = '';

  fromCity:string='';
  toCity:string='';
  date:string='';
  trip:string='';

  
  constructor(private http:HttpClient,private route: ActivatedRoute){


  }

  myObs=new Observable((observer)=>{
    console.log("obeservable works")

  })
 
  ngOnInit() {
    console.log("on it gets called")
    this.route.queryParams.subscribe((params1)=>{
      this.fromCity=params1['from']
      this.toCity=params1['to']
      this.date=params1['date1']
      this.getMethod();
     console.log(params1)
      

    })
   
  }
  

  public getMethod(){
    console.log(this.fromCity);
    console.log(this.toCity)
    console.log(this.date)
    const params = {
      fromCity: this.fromCity,
      toCity: this.toCity,
      departureDate: this.date,
      // trip: this.trip
    };
    let values=this.http.get<any>('http://localhost:8080/scheduleflight/getScheduledFlights-by-date and fromCity',{params});

    values.subscribe((data)=>{
      
      this.valu=data
    });
  }

 
  
  
}
