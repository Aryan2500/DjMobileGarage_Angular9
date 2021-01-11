import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { GlobalConstants } from '../common/global_constant';
@Injectable({
  providedIn: 'root'
})
export class AdminAppointmentService {

  header: HttpHeaders
  baseUrl: string;
  constructor( private http : HttpClient) { 
    this.header = new HttpHeaders()
    this.baseUrl = GlobalConstants.apiBaseURL + '/admin'
    this.header.append('content-type', 'application/json')

  }

  getAllAppointments(){
    const url = this.baseUrl + '/appointments'

    return this.http.get(url , {headers: this.header})
  }
}
