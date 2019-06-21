import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  username: string;
  password: string;
  users: any;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    localStorage.clear();
  }

  login() {
    this.userService.getUserJSON().subscribe(response => {
      var list = JSON.stringify(response)
      this.users = JSON.parse(list);
      for (var i = 0; i < this.users.length; i++) {
        if (this.username === this.users[i].username && this.password === this.users[i].password) {
          this.router.navigate(['/home']);
          // Token set for the Authecation
          localStorage.setItem('token', "1234abcd");
        }
      }
    });
  };

}


