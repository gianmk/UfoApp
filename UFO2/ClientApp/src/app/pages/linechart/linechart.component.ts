import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, SimpleChange } from '@angular/core';
import { Ufo } from "../../models/Ufo";

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnChanges{
  _Ufoer: Ufo[] = [];
  chart = 'LineChart';
  data = [];

  @Input() APIdata: Ufo[];

  ngOnChanges(changes: SimpleChanges) {
    this.data = changes.APIdata.currentValue;
  }

  title = "Number of observations per year";
  myColumnNames = ["OBS", "Date"];

  constructor() {}

}
