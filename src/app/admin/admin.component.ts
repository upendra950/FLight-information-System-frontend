import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private route:Router){

  }
  username='';
  password='';
  errorMsg="";
  login(){
    if(this.username.trim().length===0){
      this.errorMsg="username is required to login";
    } else if(this.password.trim().length===0){
      this.errorMsg="password  is required";
    }
    else{
      this.errorMsg=''
      this.route.navigate(['/adminpage'])
      
    }

  }

}
