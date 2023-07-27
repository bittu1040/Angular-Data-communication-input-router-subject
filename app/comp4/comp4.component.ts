import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor() { }

  data= "my name is bittu";
  @Output() outputData = new EventEmitter<string>(); 
  
  ngOnInit() {
  }

  sendData(){
    this.outputData.emit(this.data)
  }

}