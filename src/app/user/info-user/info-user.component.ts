import { Component, OnInit } from '@angular/core';
import {Fonctionnaire} from '../../_models';
import {User} from '../../_models/user';
import {UserService} from '../../_services';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  loading = false;
  users: User[] = [];
  constructor( private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

}
