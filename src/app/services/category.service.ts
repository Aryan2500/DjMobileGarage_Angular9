import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global_constant';
import{ HttpClient , HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl 
  header : HttpHeaders
  constructor(private httpClient : HttpClient) { 
    this.header = new HttpHeaders()
    this.baseUrl = GlobalConstants.apiBaseURL +'/admin/'
    this.header.append('content-type', 'application/json')

  }

  postCategory(data){
    const url  = this.baseUrl+'category'
    return this.httpClient.post(url , data , {headers:this.header})
  }

  fetchAllCategory(){
    const url  = this.baseUrl+ 'category'
    return this.httpClient.get(url , {headers:this.header})
  }

  updateCategory(data){
    const url = this.baseUrl+'category'
    return this.httpClient.put(url , data , {headers:this.header})
  }

  deleteCategory(id){
    const url = this.baseUrl+'category/'+id
    return this.httpClient.delete(url , {headers:this.header})
  }
}
