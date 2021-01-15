import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { GlobalConstants } from '../common/global_constant';
@Injectable({
  providedIn: 'root'
})
export class AdminDataCountService {

  private header: HttpHeaders
  private baseUrl: string;

  constructor( private httpClient : HttpClient) { 
    this.header = new HttpHeaders()
    this.baseUrl = GlobalConstants.apiBaseURL + '/admin'
    this.header.append('content-type', 'application/json')

  }

  fetchNumberOfAllAppointments(){
    const url = this.baseUrl+'/total-appointments'
    return this.httpClient.get(url , {headers:this.header})
  }

  fetchNumberOfNewAppointments(){
    const url = this.baseUrl+'/new-appointments'
    return this.httpClient.get(url , {headers:this.header})
  }
  fetchNumberOfPendingAppointments(){
    const url = this.baseUrl+'/pending-appointments'
    return this.httpClient.get(url , {headers:this.header})
  }

  fetchNumberOfVerifiedUsers(){
    const url = this.baseUrl+'/verified-users'
    return this.httpClient.get(url , {headers:this.header})
  }

  fetchNumberOfTotalUsers(){
    const url = this.baseUrl+'/total-users'
    return this.httpClient.get(url , {headers:this.header})
  }

}
