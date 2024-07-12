import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,FormsModule,RouterLink],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';
  // username='';
  // password='';
  // errorMsg="";
  // login(){
  //   if(this.username.trim().length===0){
  //     this.errorMsg="username is required to login";
  //   } else if(this.password.trim().length===0){
  //     this.errorMsg="password  is required";
  //   }
  //   else{
  //     this.errorMsg=''
  //   }

  // }

}
