import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';

import { routing }       from './dashboard.routing';

import { PopularApp } from './popularApp';
import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { UsersMap } from './usersMap';
import { LineChart } from './lineChart';
import { Feed } from './feed';
import { Todo } from './todo';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TodoService } from './todo/todo.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { UsersMapService } from './usersMap/usersMap.service';
import {CpuComponent} from './CPU/cpu.component';
import { Chart } from './CPU/chartistJs/chartistJs.component';
import { ChartService } from './CPU/chartistJs/chartistJs.service';
import {RamComponent} from './RAM/ram.component';
import { RChart } from './RAM/chartistJs/chartistJs.component';
import { RChartService } from './RAM/chartistJs/chartistJs.service';
import {MasterComponent} from './Master/master.component';
import { MChart } from './Master/chartistJs/chartistJs.component';
import { MChartService } from './Master/chartistJs/chartistJs.service';
import {Node1Component} from './Node1/node1.component';
import { N1Chart } from './Node1/chartistJs/chartistJs.component';
import { N1ChartService } from './Node1/chartistJs/chartistJs.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    PopularApp,
    PieChart,
    TrafficChart,
    UsersMap,
    LineChart,
    Feed,
    Todo,
    Calendar,
    Dashboard,
    CpuComponent,
    Chart,
    RamComponent,
    RChart,
    MasterComponent,
    MChart,
    Node1Component,
    N1Chart

  ],
  providers: [
    CalendarService,
    FeedService,
    LineChartService,
    PieChartService,
    TodoService,
    TrafficChartService,
    UsersMapService,
    ChartService,
    RChartService,
    MChartService,
    N1ChartService

  ]
})
export class DashboardModule {}
