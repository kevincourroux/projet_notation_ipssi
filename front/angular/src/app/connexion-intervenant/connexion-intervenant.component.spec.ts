import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionIntervenantComponent } from './connexion-intervenant.component';

describe('ConnexionIntervenantComponent', () => {
  let component: ConnexionIntervenantComponent;
  let fixture: ComponentFixture<ConnexionIntervenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionIntervenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionIntervenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
