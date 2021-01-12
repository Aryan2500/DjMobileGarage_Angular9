import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';


@NgModule({
  declarations: [AppointmentListComponent, DashboardComponent, AppointmentDetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
