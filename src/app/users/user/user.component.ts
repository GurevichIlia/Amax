import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private service: UserService) { }

  ngOnInit() {
    this.resetForm();
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
      phone: ''
    };
  }
  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.insertRecord(form);
    } else {
      this.updateUser(form);
      this.resetForm();
    }
  }
  insertRecord(form: NgForm) {
    this.service.postUser(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }
  updateUser(form: NgForm) {
    this.service.putUser(form.value);
    this.service.refreshList();
  }
}
