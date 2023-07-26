import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getUserDetails(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}