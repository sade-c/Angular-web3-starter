import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ERC20AllowanceComponent } from './erc20-allowance.component';

describe('ERC20AllowanceComponent', () => {
  let component: ERC20AllowanceComponent;
  let fixture: ComponentFixture<ERC20AllowanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERC20AllowanceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERC20AllowanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
