import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "../auth/register/register.component";
import { HomeComponent } from "../share-module/home/home.component";
import { CreateAppointmentComponent } from "./dashboard/create-appointment/create-appointment.component";

import { ListAppointmentComponent } from "./dashboard/list-appointment/list-appointment.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";

const routes: Routes = [
  {path:"dashboard" , component:HomeComponent},
  {path:"profile" , component:ProfileComponent},
  {path:"new-appointment" ,component:CreateAppointmentComponent},
  {path:"all-appointments" , component:ListAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
