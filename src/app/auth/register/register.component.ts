import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Form,
  Validators,
} from "@angular/forms";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})

export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  confirmPassError :boolean
  constructor(private fb: FormBuilder) {
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
        email: formData.value.email,
        password: formData.value.password,
      };
      console.log(user);
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
