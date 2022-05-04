import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadastroProfissionalModule} from "./pages/cadastro-profissional/cadastro-profissional.module";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/welcome/welcome.module')
      .then(m => m.WelcomeModule) },
  { path: 'cadastro-paciente', loadChildren: () => import('./pages/cadastro-paciente/cadastro-paciente.module')
      .then(m => m.CadastroPacienteModule)
  },
  { path: 'cadastro-profissional', loadChildren: () => import('./pages/cadastro-profissional/cadastro-profissional.module')
      .then(m => m.CadastroProfissionalModule)
  },
  { path: 'anamnese', loadChildren: () => import('./pages/anamnese/anamnese.module')
      .then(m => m.AnamneseModule)
  },
  { path: 'calendario', loadChildren: () => import('./pages/calendario/calendario.module')
      .then(m => m.CalendarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
