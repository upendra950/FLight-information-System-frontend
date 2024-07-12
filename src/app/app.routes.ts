import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { SupportComponent } from './support/support.component';
import { OutComponent } from './out/out.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CityComponent } from './city/city.component';
import { HistoryComponent } from './history/history.component';
import { FlightComponent } from './flight/flight.component';
import { ScheduleComponent } from './schedule/schedule.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'admin',component:AdminComponent},
    {path:'user',component:UserComponent},
    {path:'support',component:SupportComponent},
    {path:"",redirectTo:'/home',pathMatch:"full"},
    {path:'out',component:OutComponent},
    {path:'adminpage',component:AdminpageComponent},
    {path:'city',component:CityComponent},
    {path:'history',component:HistoryComponent},
    {path:'flight',component:FlightComponent},
    {path:'schedule',component:ScheduleComponent}
];
