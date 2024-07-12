import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  title = 'AngularDemo';
  username='';
  password='';
  errorMsg="";
  constructor(private router:Router){

  }
  login(){
    if(this.username.trim().length===0){
      this.errorMsg="username is required to login";
    } else if(this.password.trim().length===0){
      this.errorMsg="password  is required";
    }
    else{
      this.errorMsg=''
      this.router.navigate(["/home"])

    }

  }

}
