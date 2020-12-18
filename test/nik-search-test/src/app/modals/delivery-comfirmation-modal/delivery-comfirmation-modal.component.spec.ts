import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryComfirmationModalComponent } from './delivery-comfirmation-modal.component';

describe('DeliveryComfirmationModalComponent', () => {
  let component: DeliveryComfirmationModalComponent;
  let fixture: ComponentFixture<DeliveryComfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryComfirmationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryComfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
