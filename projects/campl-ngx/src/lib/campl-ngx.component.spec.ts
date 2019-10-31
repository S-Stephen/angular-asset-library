import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamplNgxComponent } from './campl-ngx.component';

describe('CamplNgxComponent', () => {
  let component: CamplNgxComponent;
  let fixture: ComponentFixture<CamplNgxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamplNgxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
