import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroPacienteComponent} from "./cadastro-paciente.component";
import {CadastroPacienteRoutingModule} from "./cadastro-paciente-routing.module";

@NgModule({
  declarations: [CadastroPacienteComponent],
  imports: [
    CommonModule,
    CadastroPacienteRoutingModule
  ],
  exports: [CadastroPacienteComponent]
})
export class CadastroPacienteModule { }
