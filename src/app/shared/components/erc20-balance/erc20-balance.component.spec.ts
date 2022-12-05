import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERC20BalanceComponent } from './erc20-balance.component';

describe('ERC20BalanceComponent', () => {
  let component: ERC20BalanceComponent;
  let fixture: ComponentFixture<ERC20BalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERC20BalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERC20BalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
