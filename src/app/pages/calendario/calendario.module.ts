import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastroPacienteModule} from "../cadastro-paciente/cadastro-paciente.module";
import {CalendarioComponent} from "./calendario.component";
import {CalendarioRoutingModule} from "./calendario-routing.module";
import {FullCalendarModule} from "@fullcalendar/angular";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzAvatarModule} from "ng-zorro-antd/avatar";


@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    CadastroPacienteModule,
    FullCalendarModule,
    NzGridModule,
    NzPageHeaderModule,
    NzAvatarModule
  ],
  exports: [CalendarioComponent]
})
export class CalendarioModule { }
