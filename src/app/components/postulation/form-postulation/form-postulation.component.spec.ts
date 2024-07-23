import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostulationComponent } from './form-postulation.component';

describe('FormPostulationComponent', () => {
  let component: FormPostulationComponent;
  let fixture: ComponentFixture<FormPostulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPostulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
