import {Component} from '@angular/core';

import {ChartService} from './chartistJs.service';
import 'style-loader!./chartistJs.scss';

@Component({
  selector: 'chart-selector',
  templateUrl: './chartistJs.html',
})

export class Chart {

  data:any;

  constructor(private _chartistJsService:ChartService) {
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
