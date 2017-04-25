import {Component} from '@angular/core';

import {RChartService} from './chartistJs.service';
import 'style-loader!./chartistJs.scss';

@Component({
  selector: 'Rchart-selector',
  templateUrl: './chartistJs.html',
})

export class RChart {

  data:any;

  constructor(private _chartistJsService:RChartService) {
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
