import { stringify } from "@angular/compiler/src/util";
import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
declare var $: any;
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
declare var $: any;

import { AppointmentService } from "../../../services/appointment.service";

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
  showModal = false;
  product: any;
  image: any;

  ngOnInit(): void {}

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private router: Router
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
    const fd = new FormData();

    fd.append("title", appointForm.get("problem_Title").value);
    fd.append("description", appointForm.get("problem_Description").value);
    fd.append("pick_up_date", appointForm.get("pickup_Date").value);
    fd.append(
      "pick_up_time",
      appointForm.get("pickup_Time").value + " " + appointForm.value.meridian
    );
    fd.append("phone", appointForm.get("user_Phone").value);
    fd.append("address", appointForm.get("user_Address").value);
    fd.append("image", appointForm.get("problem_Image").value);

    this.appointmentService.postAppointment(fd).subscribe((data) => {
      this.product = data;
      console.log(this.product);
      if (this.product) {
        this.title = "Appointment Fixed";
        this.msg =
          "Your Appointment is successfuly Fixed - Appointment Number is " +
          this.product.appointment_number;

        // $("#modal").modal("show")
        // $("#modal").modal({backdrop: 'static', keyboard: false})
        $("#modal").modal({
          backdrop: "static",
          keyboard: false,
          show: true,
        });
      }
    });
  }

  onFileSelected(event) {
    this.image = event.target.files[0];
    this.appointForm.get("problem_Image").setValue(this.image);
    // console.log(this.image)
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
