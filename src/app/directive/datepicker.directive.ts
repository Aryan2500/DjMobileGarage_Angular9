import { AfterViewInit, Directive, ElementRef, EventEmitter, NgZone, Output } from '@angular/core';
import { setgid } from 'process';
declare var $ : any
@Directive({
  selector: '[appDatepicker]',
  exportAs:'datepicker'
})
export class DatepickerDirective implements AfterViewInit{

  @Output() dateEventEmmiter = new EventEmitter()
  mydate: any;
  constructor(private el:ElementRef , private ngZone: NgZone) { }

  ngAfterViewInit(): void {
    this.ngZone.run(()=>{

      $(this.el.nativeElement).datepicker({
        minDate: 0,
        maxDate: "6D",
        onSelect: (date)=>{
          this.ngZone.run(()=>{
            this.setDate(date)
          })
        }
      })
      
    })
    
  }

 setDate(date) {
   this.mydate = date;
   this.dateEventEmmiter.emit(this.mydate)
 }

}
