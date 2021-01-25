import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'
import { GlobalConstants } from '../common/global_constant';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  header : HttpHeaders
  baseUrl : string
  constructor( private httpClient : HttpClient) {
    this.baseUrl = GlobalConstants.apiBaseURL +'/admin/product' 
    this.header = new HttpHeaders()
    this.header.append('content-type', 'application/json')
  }

  postProduct(data){
     
    return this.httpClient.post(this.baseUrl  , data , {headers:this.header})
  }
}
