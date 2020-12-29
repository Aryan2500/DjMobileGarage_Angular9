import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { NavigationBarComponent } from './dashboard/navigation-bar/navigation-bar.component';
import { ShareModuleModule } from '../share-module/share-module.module';
import { HomeComponent } from './dashboard/home/home.component';




@NgModule({
  declarations: [ NavigationBarComponent, HomeComponent ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ShareModuleModule
  ],
  exports:[ ]
})
export class UserModule { }
