import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { AdminAppointmentService } from 'src/app/services/admin-appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  details: any;

  constructor( private router : ActivatedRoute , private appointService : AdminAppointmentService) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params.id
    console.log(id)
    
    this.appointService.fetchSingleAppointmentDetails(id).subscribe(data=>{
      this.details = data[0]
      console.log(this.details)
    })
  }

}
