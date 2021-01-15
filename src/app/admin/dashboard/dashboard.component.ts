import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminDataCountService } from 'src/app/services/admin-data-count.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit , OnDestroy{
 
  private subscription = new Subscription()
  total_appointments :number
  new_appointments :number
  verified_user :number
  pending_case:number
  total_users:number
  
  constructor( private adminDataCountService : AdminDataCountService) { }

  

  ngOnInit(): void {
   this.subscription.add( this.adminDataCountService.fetchNumberOfAllAppointments().subscribe(data=>{
    this.total_appointments  = data['total_appointments']
  }))
  this.subscription.add( this.adminDataCountService.fetchNumberOfNewAppointments().subscribe(data=>{
    this.new_appointments = data['new_appointments']
  }))
   
  this.subscription.add( this.adminDataCountService.fetchNumberOfVerifiedUsers().subscribe(data=>{
    this.verified_user = data['verified_users']
  }))
   this.subscription.add(this.adminDataCountService.fetchNumberOfTotalUsers().subscribe(data=>{
    this.total_users = data['all_users']
  }))
    this.subscription.add(this.adminDataCountService.fetchNumberOfPendingAppointments().subscribe(data=>{
      this.pending_case = data['pending_appointments']
    }))
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  

}
