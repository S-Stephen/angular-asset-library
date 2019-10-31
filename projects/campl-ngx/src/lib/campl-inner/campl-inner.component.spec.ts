import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplInnerComponent } from './campl-inner.component';

describe('CamplInnerComponent', () => {
  let component: CamplInnerComponent;
  let fixture: ComponentFixture<CamplInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
