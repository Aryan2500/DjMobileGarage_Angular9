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

  
  constructor(private appointmentService : AdminAppointmentService) { }

  ngOnInit(): void {
    this.heading = "All Appointments"
    this.allAppointments()
  }

  allAppointments(){
    this.appointmentService.fetchAllAppointments().subscribe((data)=>{
      this.appointments = data["docs"];
      this.hasNext = data["hasNextPage"];
      this.hasPrev = data["hasPrevPage"];
      this.nextPage = data["nextPage"];
      this.prevPage = data["prevPage"];
      this.currentPage = data["page"];
      this.totalDocs = data["totalDocs"]
      console.log(data)
    })
  }

  getNextPageOrPrevPage(pageNumber){
    this.gotoTop()
   this.allAppointments()
  }

  gotoTop() {
    
    window.scroll({
      top: 0, 
      behavior: 'smooth' 
    });
  }
}
