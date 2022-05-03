import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadastroProfissionalComponent} from "./cadastro-profissional.component";

const routes: Routes = [
  { path: '', component: CadastroProfissionalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroPacienteRoutingModule { }
