import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user.module';
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
  }
  onDelete(formData: User) {
    if (confirm('Are you sure to delete this user?')) {
      this.service.deleteUser(formData).subscribe(res => {
        this.service.refreshList();
        alert('User ' + formData.firstName + '' + formData.lastName + ' successfully deleted');
      });
    }
  }
}

