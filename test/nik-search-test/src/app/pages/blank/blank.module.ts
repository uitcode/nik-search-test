import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from './blank.component';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalsModule } from 'app/modals/modals.module';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
  },
];

@NgModule({
  declarations: [BlankComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzButtonModule,
    NzModalModule,
    ModalsModule,
  ],
})
export class BlankModule {}
