import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChengepasswordComponent } from './chengepassword.component';

describe('ChengepasswordComponent', () => {
  let component: ChengepasswordComponent;
  let fixture: ComponentFixture<ChengepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChengepasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChengepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
