import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:
  [NzGridModule, NzButtonModule, NzIconModule]
})
export class SharedModule { }
