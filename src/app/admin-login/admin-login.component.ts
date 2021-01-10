import { Component, OnInit } from '@angular/core';
import  {FormGroup ,  FormBuilder , FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm:FormGroup
  status:number
  constructor(private fb:FormBuilder , private authService :AuthServiceService , private router:Router) {

    this.adminLoginForm = fb.group({

      email : ["" , [Validators.required , Validators.email]] ,

      password: ["", [Validators.minLength(5) , Validators.required]]
    })

   }

  ngOnInit(): void {
  }

  adminLogin( form){

      console.log(form.value)
      const credentials = {
        email:form.value.email,
        password:form.value.password
      }
      this.authService.postAdminLoginData(credentials).subscribe(data=>{
        if(data){
          this.router.navigate(['/admin'])
        }
      } ,err=>{
        this.status = err.status
        console.log(err)
      }
    )

  }

}
