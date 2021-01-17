import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.css']
})
export class CommonLayoutComponent implements OnInit {
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
