import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { ListElementComponent } from './list-element/list-element.component';



@NgModule({
  declarations: [AppointmentListComponent, DashboardComponent, AppointmentDetailsComponent, ListElementComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
