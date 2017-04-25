import { Routes, RouterModule }  from '@angular/router';

import {CpuComponent} from './CPU/cpu.component';

import { ModuleWithProviders } from '@angular/core';

const route:Routes = [
  {
    path:'',

    children: [
      { path: 'cpu', component: CpuComponent }
    ]
  }
]
// noinspection TypeScriptValidateTypes
export const routes: Routes = [

];


