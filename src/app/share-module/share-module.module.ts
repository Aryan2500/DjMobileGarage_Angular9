import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [HomeComponent,NavigationBarComponent ],
  imports: [
    CommonModule,
    RouterModule
  ], 
 exports:[HomeComponent , NavigationBarComponent ]
})
export class ShareModuleModule { }
