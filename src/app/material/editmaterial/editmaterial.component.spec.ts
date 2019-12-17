import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmaterialComponent } from './editmaterial.component';

describe('EditmaterialComponent', () => {
  let component: EditmaterialComponent;
  let fixture: ComponentFixture<EditmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
