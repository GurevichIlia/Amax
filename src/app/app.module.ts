import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { UserService } from './shared/user.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserComponent,
    NavbarComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
