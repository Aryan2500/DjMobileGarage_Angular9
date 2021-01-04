import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

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
