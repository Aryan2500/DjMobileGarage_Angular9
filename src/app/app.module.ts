import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import { UserModule }  from './user/user.module';
// import { HttpClientModule} from "@angular/common/http"
// import { AuthServiceService } from './auth/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    UserModule
    // HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
