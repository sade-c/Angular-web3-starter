import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERC20MetadataComponent } from './erc20-metadata.component';

describe('ERC20MetadataComponent', () => {
  let component: ERC20MetadataComponent;
  let fixture: ComponentFixture<ERC20MetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ERC20MetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ERC20MetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
