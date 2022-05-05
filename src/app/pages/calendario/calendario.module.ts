import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastroPacienteModule} from "../cadastro-paciente/cadastro-paciente.module";
import {CalendarioComponent} from "./calendario.component";
import {CalendarioRoutingModule} from "./calendario-routing.module";


@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    CadastroPacienteModule
  ],
  exports: [CalendarioComponent]
})
export class CalendarioModule { }
