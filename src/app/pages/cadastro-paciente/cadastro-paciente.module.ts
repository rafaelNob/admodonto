import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroPacienteComponent} from "./cadastro-paciente.component";
import {CadastroPacienteRoutingModule} from "./cadastro-paciente-routing.module";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {InformacaoComponent} from "./informacao/informacao.component";
import {EnderecoComponent} from "./endereco/endereco.component";


@NgModule({
  declarations: [CadastroPacienteComponent, InformacaoComponent, EnderecoComponent],
  imports: [
    CommonModule,
    CadastroPacienteRoutingModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    NzGridModule,
    NzAvatarModule,
    NzLayoutModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzDividerModule,
    NzCardModule,
    NzDatePickerModule,
    NzSelectModule,
    NzTabsModule
  ],
  exports: [CadastroPacienteComponent]
})
export class CadastroPacienteModule { }
