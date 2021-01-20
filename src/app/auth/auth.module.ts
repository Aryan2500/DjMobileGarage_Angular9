import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule, } from "@angular/common/http"

import {
  FormsModule,
  ReactiveFormsModule,
  } from "@angular/forms";
import { AuthServiceService } from "./auth-service.service";
import { RegisterComponent } from './register/register.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
   
  ],
  providers:[AuthServiceService],
  exports: [LoginComponent],
})
export class AuthModule {}
