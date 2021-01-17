import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from './services/spinner.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor( private spinnerService : SpinnerService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(request.headers.get('skip')){
      return next.handle(request)
    }
    this.spinnerService.requestStarted()
    return this.handler(next ,request);
  }

  handler(next , req){

    return next.handle(req).pipe(
      tap(
        (event) =>{
          if(event instanceof HttpResponse){
            this.spinnerService.requestEnded()

          }
        },
        (err : HttpErrorResponse)=>{
          this.spinnerService.resetSpinner()
        }
      )
    )
  }
}
