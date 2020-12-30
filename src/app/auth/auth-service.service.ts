import { Injectable } from '@angular/core';
import{ catchError , tap , mapTo}from 'rxjs/operators'
import { HttpClient , HttpHeaders} from  "@angular/common/http"
import {GlobalConstants} from "../common/global_constant"
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   
   header : HttpHeaders
  constructor(private httpClient : HttpClient ) { 
    this.header = new HttpHeaders()
    this.header.append('content-type', 'application/json')
  }
  postLoginData(credentials){
    const url = `${GlobalConstants.apiBaseURL}/user/login`
   return this.httpClient.post(url ,credentials,{headers: this.header}).pipe(tap(data=>this.saveToken(data) ) , mapTo(true) )
  }
  saveToken(data){
    localStorage.setItem('djtoken' , data.token)
    console.log(data.token)
  }

  getCurrentToken(){
    return localStorage.getItem('djtoken')
  }

  isTokenPresent(){
    const currentToken = this.getCurrentToken()
    if(currentToken){
      return true
    }
    return false
  }
 
  logout(){
    localStorage.removeItem('djtoken')
  }

  // <-------------------------------- user Registration -------------------------------->
  registerUser(userData){
    const  url = `${GlobalConstants.apiBaseURL}/user/reg`
    return this.httpClient.post(url , userData, {headers:this.header})
    console.log(url)
  }
}
