import { Component, OnInit } from '@angular/core';
import { AdminAppointmentService } from 'src/app/services/admin-appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  heading:string
  appointments: any;
  hasNext: boolean;
  hasPrev: boolean;
  nextPage: boolean;
  pageNumber: any;
  currentPage: any;
  prevPage: any;
  totalDocs :any;
  msg: string;

  
  constructor(private appointmentService : AdminAppointmentService) { }

  ngOnInit(): void {
    this.heading = "All Appointments"
    this.allAppointments()
  }

  allAppointments(){
    this.appointmentService.fetchAllAppointments().subscribe((data)=>{
      this.setAppointmentData(data)
      console.log(data)
    })
  }

  getNewAppointments(){
    this.appointmentService.fetchAllUnseenAppointments().subscribe(data=>{
      this.setAppointmentData(data)
      console.log(data)
    })
  }

  getResolvedAppointments(){
    this.appointmentService.fetchAllResolvedAppointments().subscribe(data=>{
      this.setAppointmentData(data)
      console.log(data)
    }, err=>{
        this.appointments = undefined
        this.msg = "Resolved Appointment Not Found"

    })
  }

  getNextPageOrPrevPage(pageNumber){
    this.gotoTop()
   this.allAppointments()
  }

  setAppointmentData(data){
    this.appointments = data["docs"];
    this.hasNext = data["hasNextPage"];
    this.hasPrev = data["hasPrevPage"];
    this.nextPage = data["nextPage"];
    this.prevPage = data["prevPage"];
    this.currentPage = data["page"];
    this.totalDocs = data["totalDocs"]
  }

  

 
  gotoTop() {
    
    window.scroll({
      top: 0, 
      behavior: 'smooth' 
    });
  }
}
