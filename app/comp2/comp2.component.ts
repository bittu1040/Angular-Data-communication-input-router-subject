import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  constructor(private route: ActivatedRoute, private data:DataService) {}
  userId:any;
  userDetails: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      console.log('id', typeof params.get('id'));
      this.userId= Number(params.get('id'));
      console.log("userId",this.userId)

      this.data.getUserDetails().subscribe((data:any)=>{
        console.log("data", data)
        this.userDetails= data.find((p) => p.id === this.userId);
        console.log("this.userDetails",this.userDetails)
      })
    });

    this.route.queryParams.subscribe((params) => {
      console.log('query params', params);
    });
  }
}
