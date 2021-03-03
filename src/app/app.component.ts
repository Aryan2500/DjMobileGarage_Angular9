import { AfterViewInit, Component } from '@angular/core';
import {Renderer2} from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit{

  title = 'DjMobileGarage';
   
  constructor(private renderer: Renderer2){
     
  }

  ngAfterViewInit() {
    
  }
 
   
}
