import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { DeliveryComfirmationModalComponent } from './delivery-comfirmation-modal/delivery-comfirmation-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NzButtonModule,
    NzLayoutModule,
    NzModalModule,
    NzSelectModule,
    FormsModule,
    NzGridModule,
    NzTableModule,
    NzDatePickerModule,
    NzCheckboxModule,
    NzInputModule,
  ],
  declarations: [DeliveryComfirmationModalComponent],
})
export class ModalsModule {}
