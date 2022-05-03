import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import {InfoCardsComponent} from "./info-cards/info-cards.component";

//modulos antdesign
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    NzCardModule,
    NzGridModule,
    NzStatisticModule,
    NzAvatarModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzDescriptionsModule
  ],
  declarations: [WelcomeComponent, InfoCardsComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
