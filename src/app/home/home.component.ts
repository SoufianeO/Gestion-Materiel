import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import {AuthenticationService, UserService} from '../_services';
import {User} from '../_models/user';

@Component({ templateUrl: 'home.component.html' })

export class HomeComponent {
  loading = false;
  currentUser: User;
  userFromApi: User;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
    });
  }
}
