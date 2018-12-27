import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user.module';
import { NgForm } from '@angular/forms';

// import { userInfo } from 'os';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  editUser(user: User) {
    this.service.formData = Object.assign({}, user);
    console.log(user);
  }
  onDelete(formData: User) {
    if (confirm('Are you sure to delete this user?')) {
      this.service.deleteUser(formData).subscribe(res => {
        this.service.refreshList();
        alert('User ' + formData.firstName + ' ' + formData.lastName + ' successfully deleted');
      });
    }
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthDate: null
    };
  }
  // onSubmit(form: NgForm) {
  //   if (form.value.id == null) {
  //     this.insertRecord(form);
  //   } else {
  //     this.updateUser(form);
  //     this.resetForm();
  //     console.log(form.value);
  //   }
  // }
  insertRecord(form: NgForm) {
    this.service.postUser(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }
  updateUser(form: NgForm) {
    this.service.putUser(form.value).subscribe(res => {
      this.service.refreshList();
      console.log(form.value);
    });
  }
}

