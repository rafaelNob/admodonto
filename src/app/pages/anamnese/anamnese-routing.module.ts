import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnamneseComponent} from "./anamnese.component";



const routes: Routes = [
  { path: '', component: AnamneseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnamneseRoutingModule { }
