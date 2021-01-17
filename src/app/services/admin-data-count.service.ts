import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { GlobalConstants } from '../common/global_constant';
@Injectable({
  providedIn: 'root'
})
export class AdminDataCountService {

  
  private baseUrl: string;

  constructor( private httpClient : HttpClient) { 
    
    this.baseUrl = GlobalConstants.apiBaseURL + '/admin'

  }

  fetchNumberOfAllAppointments(){
    const url = this.baseUrl+'/total-appointments'
    // return this.httpClient.get(url , {headers:this.header})
    return this.httpClient.get(url , {headers:{skip:"true"}})
  }

  fetchNumberOfNewAppointments(){
    const url = this.baseUrl+'/new-appointments'
    return this.httpClient.get(url , {headers:{skip:"true"}})
    // return this.httpClient.get(url , {headers:this.header})
  }
  fetchNumberOfPendingAppointments(){
    const url = this.baseUrl+'/pending-appointments'
    return this.httpClient.get(url , {headers:{skip:"true"}})
    // return this.httpClient.get(url , {headers:this.header})
  }

  fetchNumberOfVerifiedUsers(){
    const url = this.baseUrl+'/verified-users'
    // return this.httpClient.get(url , {headers:this.header})
    return this.httpClient.get(url , {headers:{skip:"true"}})
  }

  fetchNumberOfTotalUsers(){
    const url = this.baseUrl+'/total-users'
    // return this.httpClient.get(url , {headers:this.header})
    return this.httpClient.get(url , {headers:{skip:"true"}})
  }

}
