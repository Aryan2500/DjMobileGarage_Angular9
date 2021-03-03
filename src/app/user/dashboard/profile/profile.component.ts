import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  editable = false;

  profileForm: FormGroup;
  image: any;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ["", [Validators.required, Validators.max(10)]],
      email: ["", [Validators.required]],
      avtar :new FormControl(),
      phone: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern("^[0-9]*$"),
        ],
      ],
      address: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  edit() {
    if (this.editable === false) {
      this.profileForm.patchValue({
        name: "Aryan",
        email: "arun2500@gmail.com",
        phone: "3234234234",
        address: "Trilok puri",
      });
      this.editable = true;
      return;
    }
  }

  saveData(form) {

    console.log(form.invalid)
    const fd = new FormData();
    fd.append('name' , form.value.name)
    fd.append('phone' , form.value.phone)
    fd.append('address' , form.value.address)
    fd.append('avtar' , form.value.avtar)

    // fd.forEach(( i)=>  console.log(i))

    if (this.editable === true) {
      this.editable = false;
    }

    
  }

  onFileSelected(event) {
    this.image = event.target.files[0];
    this.profileForm.get("avtar").setValue(this.image);
    //  console.log(this.image)
  }
}
