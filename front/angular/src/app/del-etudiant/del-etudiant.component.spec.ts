import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelEtudiantComponent } from './del-etudiant.component';

describe('DelEtudiantComponent', () => {
  let component: DelEtudiantComponent;
  let fixture: ComponentFixture<DelEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
