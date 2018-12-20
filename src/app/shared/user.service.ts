import { Injectable } from '@angular/core';
import { User } from './user.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData: User;
  list: User[];
  readonly rootURL = 'http://localhost:52618/api/amaxes';
  constructor(private http: HttpClient) { }

  postUser(formData: User) {
    return this.http.post(this.rootURL, formData);
  }
  refreshList() {
    this.http.get(this.rootURL).toPromise().then(res => this.list = res as User[]);
  }

  putUser(formData: User) {
    return this.http.put(this.rootURL + formData.id, formData);
  }
  deleteUser(formData: User) {
    return this.http.delete(this.rootURL + '/' + formData.id);
  }
}

