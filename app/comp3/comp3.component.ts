import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css'],
})
export class Comp3Component implements OnInit {
  userDetails: any;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.dataShare.subscribe((user) => {
      console.log('user in comp3 through subject', user);
      this.userDetails = user;
    });
  }
}
