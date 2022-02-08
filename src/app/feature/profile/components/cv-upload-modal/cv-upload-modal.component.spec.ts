import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvUploadModalComponent } from './cv-upload-modal.component';

describe('CvUploadModalComponent', () => {
  let component: CvUploadModalComponent;
  let fixture: ComponentFixture<CvUploadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvUploadModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvUploadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
