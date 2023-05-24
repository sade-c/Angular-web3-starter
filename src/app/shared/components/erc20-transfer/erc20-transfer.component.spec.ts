import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ERC20TransferComponent } from './erc20-transfer.component';

describe('ERC20TransferComponent', () => {
  let component: ERC20TransferComponent;
  let fixture: ComponentFixture<ERC20TransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ERC20TransferComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERC20TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
