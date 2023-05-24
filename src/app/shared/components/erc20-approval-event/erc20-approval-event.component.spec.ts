import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERC20ApprovalEventComponent } from './erc20-approval-event.component';

describe('ERC20TransferEventComponent', () => {
  let component: ERC20ApprovalEventComponent;
  let fixture: ComponentFixture<ERC20ApprovalEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ERC20ApprovalEventComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERC20ApprovalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
