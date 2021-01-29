import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  isLogin :boolean
  constructor( private authService: AuthServiceService , private router:Router) {
      if(this.authService.isTokenPresent()){
          this.isLogin = true
      }else{
        this.isLogin = false
      }

   }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
