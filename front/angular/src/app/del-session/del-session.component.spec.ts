import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelSessionComponent } from './del-session.component';

describe('DelSessionComponent', () => {
  let component: DelSessionComponent;
  let fixture: ComponentFixture<DelSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
