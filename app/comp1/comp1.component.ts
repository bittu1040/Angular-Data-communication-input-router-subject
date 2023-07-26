import { Component,Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnChanges {

 @Input() userDetails; 
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("ngonchange", this.userDetails)
  }

}