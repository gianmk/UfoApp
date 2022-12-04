import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Ufo } from "../models/Ufo";
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})


export class HomeComponent {
    Ufoer: Array<Ufo>;

    constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

    ngOnInit() {
        this.getUfoList();
    }
   
    getUfoList() {
        this.http.get<Ufo[]>('api/ufo/GetUfoList')
            .subscribe(data => {
                this.Ufoer = data;
            },
                error => console.log(error)
            );
    }
    


    
}
   

