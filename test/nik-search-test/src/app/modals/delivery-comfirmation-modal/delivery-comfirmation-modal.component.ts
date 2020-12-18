import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-delivery-comfirmation-modal',
  templateUrl: './delivery-comfirmation-modal.component.html',
  styleUrls: ['./delivery-comfirmation-modal.component.scss'],
})
export class DeliveryComfirmationModalComponent implements OnInit {
  selectedValue = null;
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      tel: '0571-22098909',
      phone: 18889898989,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      tel: '0571-22098333',
      phone: 18889898888,
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '5',
      name: 'Jake White',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Dublin No. 2 Lake Park',
    },
  ];
  date = null;
  checked = true;
  valueInput = '●２９日組・トレーナー①';

  constructor() {}

  ngOnInit(): void {}

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
