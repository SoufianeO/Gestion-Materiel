import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionnaireComponent } from './fonctionnaire.component';

describe('FonctionnaireComponent', () => {
  let component: FonctionnaireComponent;
  let fixture: ComponentFixture<FonctionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonctionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonctionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
