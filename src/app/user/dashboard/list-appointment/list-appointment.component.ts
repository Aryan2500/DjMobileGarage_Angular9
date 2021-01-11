import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { AppointmentService } from "../../../services/appointment.service";
declare var $ :any
@Component({
  selector: "app-list-appointment",
  templateUrl: "./list-appointment.component.html",
  styleUrls: ["./list-appointment.component.css"],
})
export class ListAppointmentComponent implements OnInit {
  appointments: any;
  hasNext: boolean;
  hasPrev: boolean;
  nextPage: boolean;
  pageNumber: any;
  currentPage: any;
  prevPage: any;
  totalDocs :any;

  constructor(
    private appointmentService: AppointmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.gotoTop()
    this.pageNumber = this.route.snapshot.queryParams["page"]
    this.getAppointmentHistory(this.pageNumber)
   
  }

  getAppointmentHistory(page=1) {
    
    this.appointmentService.getAppointment(page).subscribe((data) => {
      this.appointments = data["docs"];
      this.hasNext = data["hasNextPage"];
      this.hasPrev = data["hasPrevPage"];
      this.nextPage = data["nextPage"];
      this.prevPage = data["prevPage"];
      this.currentPage = data["page"];
      this.totalDocs = data["totalDocs"]
      console.log(this.appointments);
      console.log(data);
      
    });
    

  }

  getNextPageOrPrevPage(pageNumber){
    this.gotoTop()
   this.getAppointmentHistory(pageNumber)
  }

  gotoTop() {
    
    window.scroll({
      top: 0, 
      behavior: 'smooth' 
    });
  }


}
