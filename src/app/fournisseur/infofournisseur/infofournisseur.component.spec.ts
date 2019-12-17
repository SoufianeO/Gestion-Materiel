import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfofournisseurComponent } from './infofournisseur.component';

describe('InfofournisseurComponent', () => {
  let component: InfofournisseurComponent;
  let fixture: ComponentFixture<InfofournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfofournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfofournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
