import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsOverviewComponent } from './uploads-overview.component';

describe('UploadsOverviewComponent', () => {
  let component: UploadsOverviewComponent;
  let fixture: ComponentFixture<UploadsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
