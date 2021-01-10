import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import { UserModule }  from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {ReactiveFormsModule} from '@angular/forms'

// import { HttpClientModule} from "@angular/common/http"
// import { AuthServiceService } from './auth/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    AdminLayoutComponent,
    AdminLoginComponent
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    UserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    // HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
