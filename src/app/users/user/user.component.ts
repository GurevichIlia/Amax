import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  hide = true;
  constructor(private service: UserService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      iD: null,
      firstName: '',
      lastName: '',
      birthDate: null,
      email: '',
      phone: ''
    };
  }
  onSubmit(form: NgForm) {

    this.insertRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postUser(form.value).subscribe(_res => {
      this.resetForm(form);
    });
    console.log();
  }
  clicked() {
    console.log('clicked');
  }
  showForm() {
    this.hide = !this.hide;
  }
}
