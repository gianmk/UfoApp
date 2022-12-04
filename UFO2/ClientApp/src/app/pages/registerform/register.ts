import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/User';

@Component({
    selector: 'app-registerform',
    templateUrl: './register.html',
    styleUrls: ['./register.css']
})

export class RegisterForm { 
    registerskjema: FormGroup;
    feedback = "";
    status: any;
    data: any;
    
    

    registerValidering = {
        id: [""],
        regUsername: [
            null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{6,30}")])
        ],
        regPassword: [
            null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{6,30}")])
        ]
    }
    

    constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private toastr:ToastrService) {
        this.registerskjema = fb.group(this.registerValidering);
      }

    register() {
        const user = new User();

        user.username = this.registerskjema.value.regUsername;
        user.password = this.registerskjema.value.regPassword;

        this.http.post<User>("api/User/AddUser/", user)
            .subscribe(ok => {
                this.data = ok;
                this.status = this.data.status
                if (this.status == "1") {
                    
                    this.feedback = "registration success, please log in";
                }
                else {
                    this.feedback = "Username is taken"
                }



            },
                error => console.log(error));
        
    };
} 
