import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotationEtudiantComponent } from './notation-etudiant.component';

describe('NotationEtudiantComponent', () => {
  let component: NotationEtudiantComponent;
  let fixture: ComponentFixture<NotationEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotationEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotationEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
