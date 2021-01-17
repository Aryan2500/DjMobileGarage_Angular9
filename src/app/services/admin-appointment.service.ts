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

  fetchAllAppointments(page=1){
    const url = this.baseUrl + '/appointments?page='+page

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

  fetchAllUnseenAppointments(page=1){
    const url = this.baseUrl+'/appointments/unseen?page='+page
    return this.http.get(url , {headers:this.header})
  }

  fetchAllResolvedAppointments(page=1){
    const url = this.baseUrl+'/appointments/repaired?page='+page
    return this.http.get(url , {headers:this.header})
  }

  fetchPendingAppointments(page=1){
    const url = this.baseUrl+'/appointments/pending?page='+page
    return this.http.get(url, {headers:this.header})
  }

  fetchSearchAppointment(text ,page=1){
    const url = this.baseUrl + '/appointments/search/'+text+'?page='+page
    return this.http.get(url , {headers:this.header})
  }
}
