import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {
  
  @Input()
  data:any='';

  
  
  constructor() { 
    console.log(this.data);
  }

 
  ngOnInit() {
  }

}
