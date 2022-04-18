import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
//modulos antdesign
import { NzInputModule } from 'ng-zorro-antd/input';  
import { NzFormModule } from 'ng-zorro-antd/form';



@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NzInputModule ,
    NzFormModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
