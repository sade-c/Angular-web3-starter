import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERC20TransferEventComponent } from './erc20-transfer-event.component';

describe('ERC20TransferEventComponent', () => {
  let component: ERC20TransferEventComponent;
  let fixture: ComponentFixture<ERC20TransferEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERC20TransferEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERC20TransferEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
