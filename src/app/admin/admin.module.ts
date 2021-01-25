import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { ListElementComponent } from './list-element/list-element.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';



@NgModule({
  declarations: [AppointmentListComponent, DashboardComponent, AppointmentDetailsComponent, ListElementComponent, AddProductComponent, AddCategoryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
