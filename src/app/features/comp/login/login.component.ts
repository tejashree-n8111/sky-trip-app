import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser: any;
  users: any;

  userForm = new FormGroup(
    {
      username: new FormControl(''),
      password: new FormControl('')
    }
  )

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginService.getUsersData().subscribe(
      (users) => {
        console.log(users)
        this.users = users
      },
      (error) => { console.log(error) }
    )
  }

  loginFn() {
    this.loginUser = this.userForm.value

    let user = this.users.find(
      (user: any) => {
        //console.log(user);
        return this.loginUser.username == user.username && this.loginUser.password == user.password
      }
    )
    console.log(user)

    if (user) {
      //  localStorage.setItem('loggedInUser', user.username)//in httpInterceptor using by localstorage
      this.loginService.user = user.username; //in HttpInterceptor using by login/root service

      this.router.navigateByUrl('searchFlight');
    } else {
      console.log('no');
    }
  }

}
