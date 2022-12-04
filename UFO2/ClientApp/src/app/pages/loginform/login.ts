import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/User';

@Component({
    selector: 'app-loginform',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})

export class LoginForm {
    loginskjema: FormGroup;
    userLoggedIn = false;
    data: any;
    message: any;

    loginValidering = {
        id: [""],
        username: [
            null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZæøåÆØÅ. \-]{6,30}")])
        ],
        password: [
            null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZæøåÆØÅ. \-]{6,30}")])
        ]
    }

    constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
        this.loginskjema = fb.group(this.loginValidering);
      }

    login() {
        const user = new User();

        user.username = this.loginskjema.value.username;
        user.password = this.loginskjema.value.password;

        this.http.post<User>("api/User/LoggIn/", user)
            .subscribe(res => {
                this.data = res;
                this.message = this.data.message;
                if (this.message == "logged in") {
                    this.router.navigate(['/']);
                    this.userLoggedIn === true;
                    this.toastr.success("You are logged in")
                }
                else {
                    this.toastr.error("Error, please check that username and password is correct")
                }
        },
        error => console.log(error)
        )
    }

    logout() {
        if (confirm('You are about to log out')) {
            this.http.get("api/User/logout/").
                subscribe(ok => (this.router.navigate(['/']) && this.userLoggedIn === false && this.toastr.success(" You are logged out"))

                ),
                e => console.log(e);
        }
    }
        };
    


