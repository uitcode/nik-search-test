import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DeliveryComfirmationModalComponent } from 'app/modals/delivery-comfirmation-modal/delivery-comfirmation-modal.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
})
export class BlankComponent implements OnInit {
  constructor(
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {}

  createModal(): void {
    const modal = this.modal.create({
      nzContent: DeliveryComfirmationModalComponent,
      nzClosable: false,
      nzWidth: '95%',
      nzBodyStyle: { height: '90vh' },
      nzStyle: { top: '10px' },
      nzViewContainerRef: this.viewContainerRef,
      nzFooter: [
        {
          label: '配信する',
          type: 'primary',
          size: 'large',
          onClick: () => this.modal.confirm(),
        },
        {
          label: 'キャンセル',
          type: 'default',
          size: 'large',
          onClick: () => modal.destroy(),
        },
      ],
    });
    modal.afterClose.subscribe((result) =>
      console.log('[afterClose] The result is:', result)
    );
  }
}
