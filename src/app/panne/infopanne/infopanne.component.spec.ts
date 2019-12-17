import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopanneComponent } from './infopanne.component';

describe('InfopanneComponent', () => {
  let component: InfopanneComponent;
  let fixture: ComponentFixture<InfopanneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopanneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
