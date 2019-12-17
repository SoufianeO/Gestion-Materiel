import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomaterialComponent } from './infomaterial.component';

describe('InfomaterialComponent', () => {
  let component: InfomaterialComponent;
  let fixture: ComponentFixture<InfomaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
