import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { NavigationBarComponent } from '../share-module/navigation-bar/navigation-bar.component';
import { ShareModuleModule } from '../share-module/share-module.module';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { CreateAppointmentComponent } from './dashboard/create-appointment/create-appointment.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms'

import { DatepickerDirective } from '../directive/datepicker.directive';
import { HttpClientModule } from '@angular/common/http';
import { ListAppointmentComponent } from './dashboard/list-appointment/list-appointment.component'



@NgModule({
  declarations: [ NavigationBarComponent, HomeComponent, ProfileComponent,  CreateAppointmentComponent ,DatepickerDirective, ListAppointmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    ShareModuleModule,
    HttpClientModule
  ],
  exports:[ ]
})
export class UserModule { }
