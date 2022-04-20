import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/welcome/welcome.module')
      .then(m => m.WelcomeModule) },
  { path: 'cadastro-paciente', loadChildren: () => import('./pages/cadastro-paciente/cadastro-paciente.module')
      .then(m => m.CadastroPacienteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
