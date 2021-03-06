import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private authService: AuthServiceService , private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authService.isTokenPresent()){
          if(this.authService.getUserRole() === 1){
            this.router.navigate(['/admin/'])
            console.log("from sighn in guard")
            return false
          }
        this.router.navigate(['/user/dashboard'])
        return false
      }
      return true;
  }
  
}
