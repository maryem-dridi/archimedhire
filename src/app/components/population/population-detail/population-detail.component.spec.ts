import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationDetailComponent } from './population-detail.component';

describe('PopulationDetailComponent', () => {
  let component: PopulationDetailComponent;
  let fixture: ComponentFixture<PopulationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
