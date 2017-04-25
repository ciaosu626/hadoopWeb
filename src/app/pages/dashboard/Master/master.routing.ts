import { Routes, RouterModule }  from '@angular/router';

import {MasterComponent} from './Master/Master.component';

import { ModuleWithProviders } from '@angular/core';

const route:Routes = [
  {
    path:'',

    children: [
      { path: 'cpu', component: MasterComponent }
    ]
  }
]
// noinspection TypeScriptValidateTypes
export const routes: Routes = [

];


