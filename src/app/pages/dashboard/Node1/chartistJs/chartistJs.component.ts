import {Component} from '@angular/core';

import {N1ChartService} from './chartistJs.service';
import 'style-loader!./chartistJs.scss';

@Component({
  selector: 'N1chart-selector',
  templateUrl: './chartistJs.html',
})

export class N1Chart {

  data:any;

  constructor(private _chartistJsService:N1ChartService) {
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
