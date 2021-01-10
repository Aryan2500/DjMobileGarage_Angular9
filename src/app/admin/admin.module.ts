import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [AppointmentListComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
