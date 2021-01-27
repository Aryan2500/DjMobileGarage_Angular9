import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListProductComponent } from './list-product/list-product.component';



const routes: Routes = [
  {path:'' , component: DashboardComponent},
  {path:'all-appointments' , component:AppointmentListComponent},
  {path:'appointment-details/:id' ,component:AppointmentDetailsComponent},
  {path:'add-product' , component:AddProductComponent},
  {path:'list-product' , component:ListProductComponent},
  {path:'add-category' , component:AddCategoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
