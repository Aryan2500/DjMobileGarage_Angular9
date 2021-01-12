import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'' , component: DashboardComponent},
  {path:'all-appointments' , component:AppointmentListComponent},
  {path:'appointment-details/:id' ,component:AppointmentDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
