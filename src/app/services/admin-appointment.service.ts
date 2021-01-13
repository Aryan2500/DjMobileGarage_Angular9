import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { GlobalConstants } from '../common/global_constant';
@Injectable({
  providedIn: 'root'
})
export class AdminAppointmentService {

  private header: HttpHeaders
  private baseUrl: string;
  constructor( private http : HttpClient) { 
    this.header = new HttpHeaders()
    this.baseUrl = GlobalConstants.apiBaseURL + '/admin'
    this.header.append('content-type', 'application/json')

  }

  fetchAllAppointments(){
    const url = this.baseUrl + '/appointments'

    return this.http.get(url , {headers: this.header})
  }

  fetchSingleAppointmentDetails( id ){
    const url = this.baseUrl + '/appointment/'+id
    return this.http.get(url , {headers:this.header})
  }

  setAppointmentAccepted(id){
    const url = this.baseUrl+'/appointment/approve/'+id
    return this.http.patch(url , {} , {headers:this.header})

  }

  setAppointmentRejected(id){
    const url = this.baseUrl+'/appointment/reject/'+id
    return this.http.patch(url , {} , {headers:this.header})
  }

  fetchAllUnseenAppointments(){
    const url = this.baseUrl+'/appointments/unseen'
    return this.http.get(url , {headers:this.header})
  }

  fetchAllResolvedAppointments(){
    const url = this.baseUrl+'/appointments/repaired'
    return this.http.get(url , {headers:this.header})
  }
}
