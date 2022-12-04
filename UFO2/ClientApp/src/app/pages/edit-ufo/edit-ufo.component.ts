import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Ufo } from 'src/app/models/Ufo';
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { Country } from 'src/app/models/Country'
import { State } from "src/app/models/State"

@Component({
  selector: 'app-edit-ufo',
  templateUrl: './edit-ufo.component.html',
  styleUrls: ['./edit-ufo.component.css']
})
export class EditUfoComponent implements OnInit {
    editUfo: Ufo = {
        id: 0,
        date_time: "",
        country: ' ',
        state: ' ',
        shape: ' ',
        duration: ' ',
        text: '',
        location: "",
        time: "",
    }
    maplocation: any;
    states: any;
    countries: Array<Country>;
    chosenState: string;
    newState: string;
    types: Array<State>;
    data: any;
    message: any;
    id: any;
    location: any;

   

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.http.get<Ufo>("api/ufo/GetUfo/" + id)
                .subscribe(data => {
                    this.editUfo = data;
                    this.location = data;
                    this.maplocation = this.location.location;
                })
        }
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

    updateUfo() {
        if (confirm("You are about to make changes, please confirm")) {
            if (this.chosenState === 'No states available, write in state') {
                this.chosenState = (<HTMLInputElement>document.getElementById('State')).value;
            }
            this.editUfo.state = this.chosenState;

            this.http.put<Ufo>("api/ufo/editUfo", this.editUfo)
                .subscribe((response) => {
                    this.data = response;
                    this.message = this.data.message
                    if (this.message == "Updated") { 
                        this.router.navigate(['home'])
                    this.toastr.success("Updated")
                }
                    else {
                        this.toastr.error("error");
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
    deleteUfo(id: number) {
        this.id = this.editUfo.id;
        if (confirm('Are you sure to delete?')) {
            this.http.delete("api/ufo/deleteUFo/" + id)
                .subscribe(response => {
                    this.data = response;
                    this.message = this.data.message
                    if (this.message == "Deleted") {
                        this.toastr.success("Deleted");
                        this.router.navigate(['home']);
                    }
                    else { this.toastr.error("error") }



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

  }
    


