import {Component} from '@angular/core';

import {MChartService} from './chartistJs.service';
import 'style-loader!./chartistJs.scss';

@Component({
  selector: 'Mchart-selector',
  templateUrl: './chartistJs.html',
})

export class MChart {

  data:any;

  constructor(private _chartistJsService:MChartService) {
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
