import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_PT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import {NzAvatarModule} from "ng-zorro-antd/avatar";

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        NzCardModule,
        NzGridModule,
        NzStatisticModule,
        NzAvatarModule
    ],
  providers: [{ provide: NZ_I18N, useValue: pt_PT }],
  bootstrap: [AppComponent]
})
export class AppModule { }
