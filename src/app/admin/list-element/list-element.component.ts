import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

  @Input() appointments
  // @Input() created_on
  // @Input() _id
  // @Input() isRepaired
  // @Input() isApproved

  constructor() { }

  ngOnInit(): void {
    console.log(this.appointments)
  }

}
