import { stringify } from "@angular/compiler/src/util";
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
declare var $: any;
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
declare var $ : any

import { AppointmentService } from "../../appointment.service";

@Component({
  selector: "app-create-appointment",
  templateUrl: "./create-appointment.component.html",
  styleUrls: ["./create-appointment.component.css"],
})
export class CreateAppointmentComponent implements OnInit {
  // pickup_Date : any
  appointForm: FormGroup;
  modalMsg: string;
  msg: string;
  title: string;
  showModal =  false;

  ngOnInit(): void {}
 
  
  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private router: Router,
   
  ) {
    const currentDate = this.formatted_date();
    this.appointForm = this.fb.group({
      problem_Title: ["", [Validators.required]],
      problem_Description: ["", [Validators.required]],
      problem_Image: new FormControl(),
      pickup_Time: ["", Validators.required],
      pickup_Date: [currentDate, Validators.required],
      meridian: ["", Validators.required],
      user_Address: ["", [Validators.required]],
      user_Phone: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern("^[0-9]*$"),
        ],
      ],
    });
  }

  create_Appointment(appointForm) {
    const appointmentData = {
      title: appointForm.value.problem_Title,
      description: appointForm.value.problem_Description,
      image: appointForm.value.problem_Image,
      pick_up_date: appointForm.value.pickup_Date,
      pick_up_time:
        appointForm.value.pickup_Time + " " + appointForm.value.meridian,
      address: appointForm.value.user_Address,
      phone: appointForm.value.user_Phone,
    };
    this.appointmentService
      .postAppointment(appointmentData)
      .subscribe((data) => {
        const product = data;
        if (product) {          
          this.title = "Appointment Fixed";
          this.msg =
            "Your Appointment is successfuly Fixed - Appointment Number is " +
            product.appointment_number;
            $("#modal").modal("show")
        }
      });
  }

  dateEventEmmiter(data) {
    this.appointForm.patchValue({ pickup_Date: data });
  }

  formatted_date() {
    var result = "";
    var d = new Date();
    result += d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
    return result;
  }

 
}
