import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ufo } from "../../models/Ufo";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],

})
export class OverviewComponent implements OnInit {
  data = [];
  mostRecent;
  numberOfObs;
  topCountry;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Ufo[]>('api/ufo/GetUfoList')
    .subscribe(data => {
      if(data)
        this.formatData(data);
    },
        error => console.log(error)
    );
  }

  formatData (ufo) {
    // Maps dates and removes undefined and removes item if beginning of year is not 19 or 20.
    const dates = ufo
    .map(u => u.date_time)
    .filter((u) => { if ((u !== null || u === 'undefined') && (u.slice(0,2) === "19" || u.slice(0,2) === "20")) { return u} });

    // Turns time of observations into date of observation
    const years = dates.map(u => u.slice(0, 10));
    years.sort();
    this.mostRecent = years[years.length - 1];
    this.numberOfObs = ufo.length;
    const formatdata = [];

    // Turns time of observations into year of observation
    const year = years.map(u => u.slice(0, 4));

    // Counts number of observations pr year
    let number = 1;
    for(let i=0; i<year.length; i++) {
        if(year[i] === year[i+1]) {
          number++;
        } else {
          formatdata.push([year[i], number]);
          number = 1;
        }
    }

    this.data = formatdata;

    var mf = 1;
    var m = 0;
    // Counts top country
    // Algorithm is taken from https://www.w3resource.com/javascript-exercises/javascript-array-exercise-8.php
    for (var i=0; i<ufo.length; i++) {
        for (var j=i; j<ufo.length; j++) {
          if (ufo[i].country == ufo[j].country)
            m++;
          if (mf<m) {
            mf=m; 
            this.topCountry = ufo[i].country;
          }
        }
        m=0;
      }
  }
}
