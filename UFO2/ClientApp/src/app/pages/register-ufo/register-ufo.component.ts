import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";
import { Ufo } from 'src/app/models/Ufo';
import { ToastrService } from 'ngx-toastr';
import { Country } from 'src/app/models/Country'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from "src/app/models/State"



@Component({
  selector: 'app-register-ufo',
  templateUrl: './register-ufo.component.html',
  styleUrls: ['./register-ufo.component.css']
})


export class RegisterUfoComponent implements OnInit {
    newUfo: Ufo = {
        id: 0,
        date_time: ' ',
        text: '',
        country: '',
        state: ' ',
        duration: ' ',
        shape: '',
        location: "",
        time: "",
    }
    
   
    states: any;
    countries: Array<Country>;
    chosenState: string;
    newState: string;
    types: Array<State>;
    data: any;
    message: any;

    
   

    

    constructor(private http: HttpClient, private router: Router, private toastr: ToastrService, private fb: FormBuilder,) {
        
    }

    ngOnInit() {
        this.getCountries();
    }
    noStates(state: string) {
        this.chosenState = state;
        if (state === 'No states available, write in state') {
            this.newState = '<label for="State" style="color: black">State</label> <input type="text" class="form-control" id="State" name="State" [(ngModel)]="State" style="color: black"/>';
        }
        else {
            this.newState = "";
        }
    }

    regUfo() {

       
        if (confirm(' confirm Register Ufo?')) {
            if (this.chosenState === 'No states available, write in state') {
            
                this.chosenState = (<HTMLInputElement>document.getElementById('State')).value;
            }
            this.newUfo.state = this.chosenState;
            
            this.http.post("api/ufo/regUfo", this.newUfo)
                .subscribe(res => {
                    this.data = res;
                    this.message = this.data.message;
                    if (this.message == "sighting added") {
                        this.router.navigate(['home']);
                        this.toastr.success(this.message);
                    }
                    else {
                        this.toastr.error("error")
                    }
                    
                },
                    (error: HttpErrorResponse) => {//errors 

                        console.log(error);
                        if (error.status === 401)
                            this.toastr.error("Unauthorized, please log in")

                        else
                            this.toastr.error("error")
                    });

        }
    }
    getCountries() {
        this.http.get<Country[]>('api/Cascasding/GetCountries')
            .subscribe(data => {
                this.countries = data;
            },
                error => console.log(error)
            );
    }
    getStates(event: any) {
       
        this.http.get('api/Cascasding/GetStates/' + event.target.value).subscribe(res => {
            this.states = res;
        });
    }
 
   
    

}


