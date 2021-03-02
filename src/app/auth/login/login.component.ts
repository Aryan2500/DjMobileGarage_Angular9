import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import{Router} from "@angular/router"

import { AuthServiceService } from "../auth-service.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  status : number = 0
  constructor(private fb: FormBuilder , private auth_service : AuthServiceService , private router:Router) {
    this.loginForm = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {}

  // login
  login(loginForm) {
    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    // console.log(JSON.stringify(credentials) )

    console.log(credentials)
     this.auth_service.postLoginData(credentials).subscribe(data=>{
       if(data){
         this.router.navigate(['/user/profile'])
       }else{
         this.router.navigate(['/login'])
       }
    } , 
    (err)=>{
      this.status = err.status
      if(this.status == 403){
         this.loginForm.reset()
      }
    }
    )

  }


}
