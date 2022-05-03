import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadastroPacienteComponent} from "./cadastro-paciente.component";


const routes: Routes = [
  { path: '', component: CadastroPacienteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroPacienteRoutingModule { }
