import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { routing }       from './dashboard.routing';
import { CpuComponent} from './CPU/cpu.component';
import { ChartistJs } from './components/chartistJs/chartistJs.component';
import { ChartistJsService } from './components/chartistJs/chartistJs.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [

    CpuComponent,
    ChartistJs
  ],
  providers: [
    ChartistJsService
  ]
})
export class CpuModule {

}
