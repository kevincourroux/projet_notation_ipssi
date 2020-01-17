import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelModuleComponent } from './del-module.component';

describe('DelModuleComponent', () => {
  let component: DelModuleComponent;
  let fixture: ComponentFixture<DelModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
