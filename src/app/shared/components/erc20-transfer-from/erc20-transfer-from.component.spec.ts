import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ERC20TransferFromComponent } from './erc20-transfer-from.component';

describe('ERC20TransferComponent', () => {
  let component: ERC20TransferFromComponent;
  let fixture: ComponentFixture<ERC20TransferFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ERC20TransferFromComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERC20TransferFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
