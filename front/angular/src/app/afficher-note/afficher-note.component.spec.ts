import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherNoteComponent } from './afficher-note.component';

describe('AfficherNoteComponent', () => {
  let component: AfficherNoteComponent;
  let fixture: ComponentFixture<AfficherNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
