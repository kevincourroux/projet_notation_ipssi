import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionEtudiantComponent } from './connexion-etudiant.component';

describe('ConnexionEtudiantComponent', () => {
  let component: ConnexionEtudiantComponent;
  let fixture: ComponentFixture<ConnexionEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
