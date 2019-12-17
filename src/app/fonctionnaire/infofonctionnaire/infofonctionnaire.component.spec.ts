import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfofonctionnaireComponent } from './infofonctionnaire.component';

describe('InfofonctionnaireComponent', () => {
  let component: InfofonctionnaireComponent;
  let fixture: ComponentFixture<InfofonctionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfofonctionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfofonctionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
