import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import {GlobalConstants} from '../common/global_constant'
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl:string
  private header : HttpHeaders
  constructor(private httpClient:HttpClient) {
    this.header = new HttpHeaders()
    this.baseUrl = GlobalConstants.apiBaseURL
    this.header.append('content-type', 'application/json')
   }

  postAppointment(appointmentData){
    const url  = this.baseUrl + "/appointment"
    // appointmentData = JSON.stringify(appointmentData)
    return this.httpClient.post(url ,appointmentData ,{headers:this.header})

  }
}
