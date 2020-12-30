import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Form,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthServiceService } from "../auth-service.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})

export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  statusCode : number
  confirmPassError :boolean
  data = undefined

  constructor(private fb: FormBuilder , private authService : AuthServiceService , private router:Router) {
    this.regForm = fb.group({
      name: ["", [Validators.required , Validators.minLength(3)]],
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required, Validators.minLength(5)]],
      cpassword: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  register(formData) {
    if (this.confirmPassword(formData.value.password, formData.value.cpassword)) {
      const user = {
        name:formData.value.name,
        email: formData.value.email,
        password: formData.value.password,
      };
      this.authService.registerUser(user).subscribe(data=>{
        this.data = data
        console.log(data)
        //this.router.navigate(['/login'])
      } , err=>{
         this.statusCode = err.status
         console.log(this.statusCode)
      })
      // console.log(user);
    }
    
  }

  confirmPassword(password, Cpassword): boolean {
    if (password === Cpassword) {
      this.confirmPassError = false
      return true;
    }
    this.confirmPassError =  true
    return false;
  }
}
