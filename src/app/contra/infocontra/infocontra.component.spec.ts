import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocontraComponent } from './infocontra.component';

describe('InfocontraComponent', () => {
  let component: InfocontraComponent;
  let fixture: ComponentFixture<InfocontraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocontraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
