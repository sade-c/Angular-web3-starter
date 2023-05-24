import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ERC20ApproveComponent } from './erc20-approve.component';

describe('ERC20ApproveComponent', () => {
  let component: ERC20ApproveComponent;
  let fixture: ComponentFixture<ERC20ApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ERC20ApproveComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERC20ApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
