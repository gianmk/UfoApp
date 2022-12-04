﻿import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent {
    kartdata = [];
    myColumnNames = ['City', 'Sightings'];
    title = "UFO map";
    chart = 'GeoChart';
    
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        const kdat = [];
        this.http.get<any>('api/ufo/MapData')
            .subscribe(data => {
                data.map((x) => kdat.push(Object.values(x)));
                this.kartdata = kdat;
            },
                (e => console.log("Feil " + e))
    );
    }

}