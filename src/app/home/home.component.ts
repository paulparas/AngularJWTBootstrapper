import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { UserService } from '../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

}
