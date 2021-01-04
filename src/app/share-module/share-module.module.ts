import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SpinnerComponent } from './spinner/spinner.component';




@NgModule({
  declarations: [HomeComponent, SpinnerComponent, ],
  imports: [
    CommonModule
  ], 
 exports:[HomeComponent , SpinnerComponent , ]
})
export class ShareModuleModule { }
