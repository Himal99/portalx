import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLandingPageComponent } from './employee-landing-page.component';

describe('EmployeeLandingPageComponent', () => {
  let component: EmployeeLandingPageComponent;
  let fixture: ComponentFixture<EmployeeLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
