import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarioComponent} from "./calendario.component";
import {CalendarioRoutingModule} from "./calendario-routing.module";
import {DayPilotModule} from "@daypilot/daypilot-lite-angular";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "../../calendar/data.service";



@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    DayPilotModule,
    HttpClientModule
  ],
  exports: [CalendarioComponent],
  providers:    [ DataService ]
})
export class CalendarioModule { }
