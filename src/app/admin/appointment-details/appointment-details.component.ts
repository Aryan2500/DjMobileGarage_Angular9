import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global_constant';
import { AdminAppointmentService } from 'src/app/services/admin-appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  details: any;
  apiBaseUrl = GlobalConstants.apiBaseURL

  constructor( private router : ActivatedRoute , private appointService : AdminAppointmentService) {
    
   }

  ngOnInit(): void {
    this.getAppointmentDetail()
  }

  getAppointmentDetail(){
    const id = this.router.snapshot.params.id    
    this.appointService.fetchSingleAppointmentDetails(id).subscribe(data=>{
      this.setData(data[0])
      console.log(data[0])
    })
  }

  setData(data){
    this.details = data
  }

  acceptAppointment(id){
    this.appointService.setAppointmentAccepted(id).subscribe(data=>{
      // console.log(data)
      this.getAppointmentDetail()

    })
    
  }

  rejectAppointment(id){
    this.appointService.setAppointmentRejected(id).subscribe(data=>{
      console.log(data)
      this.getAppointmentDetail()
    })
  }

}
