import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelIntervenantComponent } from './del-intervenant.component';

describe('DelIntervenantComponent', () => {
  let component: DelIntervenantComponent;
  let fixture: ComponentFixture<DelIntervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelIntervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
