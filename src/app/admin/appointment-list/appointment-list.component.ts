import { Component, OnInit } from "@angular/core";
import { AdminAppointmentService } from "src/app/services/admin-appointment.service";
import { Form } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-appointment-list",
  templateUrl: "./appointment-list.component.html",
  styleUrls: ["./appointment-list.component.css"],
})
export class AppointmentListComponent implements OnInit {
  heading: string;
  appointments: any;
  hasNext: boolean;
  hasPrev: boolean;
  nextPage: boolean;
  pageNumber: any;
  currentPage: any;
  prevPage: any;
  totalDocs: any;
  msg: string;
  NewResetRadioBtn: boolean;
  ResolvedResetRadioBtn: boolean;
  PendingResetRadioBtn: boolean;
  form: any;

  constructor(private appointmentService: AdminAppointmentService , private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.heading = "All Appointments";
    this.allAppointments(1);
  }

  allAppointments(page) {
    this.appointmentService.fetchAllAppointments(page).subscribe((data) => {
      this.setAppointmentData(data);
      if(this.form!=undefined){
        this.form.resetForm()
      }
      console.log(data);
    });
    this.ResolvedResetRadioBtn = true;
    this.NewResetRadioBtn = true;
    this.PendingResetRadioBtn = true;
  }

  getPendingAppointment(page) {
    this.appointmentService.fetchPendingAppointments(page).subscribe((data) => {
      this.setAppointmentData(data);
      this.PendingResetRadioBtn = false;
    });
  }

  getNewAppointments(page) {
    this.appointmentService.fetchAllUnseenAppointments(page).subscribe((data) => {
      this.setAppointmentData(data);
      console.log(data);
      this.NewResetRadioBtn = false;
    });
  }

  getResolvedAppointments(page) {
    this.appointmentService.fetchAllResolvedAppointments(page).subscribe(
      (data) => {
        this.setAppointmentData(data);
        this.ResolvedResetRadioBtn = false;
        console.log(data);
      },
      (err) => {
        this.appointments = undefined;
        this.msg = "Resolved Appointment Not Found";
        this.ResolvedResetRadioBtn = false;
      }
    );
  }

  searchAppointment(forms) {

    this.ResolvedResetRadioBtn = true;
    this.NewResetRadioBtn = true;
    this.PendingResetRadioBtn = true;
    this.form = forms;
    
    const text = this.form.value.text;
        
    if  ( text=='' || text == null || text ==undefined)  {
      this.allAppointments(1)
      // console.log(text);
      return;
    }

    this.appointmentService.fetchSearchAppointment(text).subscribe(
      (data) => {
        console.log(data["docs"]);
        this.setAppointmentData(data);
      },
      (err) => {
        this.appointments = undefined;
        this.msg = "Appointment You are searching not Found";
      }
    );
  }

  getNextPageOrPrevPage(pageNumber) {
    this.gotoTop();
    if(this.ResolvedResetRadioBtn===false){
      this.getResolvedAppointments(pageNumber)
    }
    else if(this.PendingResetRadioBtn === false){
      this.getPendingAppointment(pageNumber)
    }
    else if(this.NewResetRadioBtn === false){
      this.getNewAppointments(pageNumber)
    }else{
      this.allAppointments(pageNumber);
    }
    
  }

  setAppointmentData(data) {
    this.appointments = data["docs"];
    this.hasNext = data["hasNextPage"];
    this.hasPrev = data["hasPrevPage"];
    this.nextPage = data["nextPage"];
    this.prevPage = data["prevPage"];
    this.currentPage = data["page"];
    this.totalDocs = data["totalDocs"];
  }

  gotoTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
}
