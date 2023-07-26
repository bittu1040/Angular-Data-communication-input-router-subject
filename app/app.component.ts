import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: any;
  userDetails: any;
  userId: any;
  userDetailbyRouter: any;
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.data.getUserDetails().subscribe((data) => {
      this.users = data;
    });
  }

  getUserDetails(user) {
    this.userDetails = user;
    this.router.navigate(['/user', user.id]);
  }
}
