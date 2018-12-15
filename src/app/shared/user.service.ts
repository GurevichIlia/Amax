import { Injectable } from '@angular/core';
import { User } from './user.module';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData: User;
  list: User[];
  readonly rootURL = 'http://localhost:55535/api/AMAXes';
  constructor(private http: HttpClient) { }

  postUser(formData: User) {
    return this.http.post(this.rootURL, formData);
  }
  refreshList() {
    this.http.get(this.rootURL).toPromise().then(res => this.list = res as User[]);
  }
}
