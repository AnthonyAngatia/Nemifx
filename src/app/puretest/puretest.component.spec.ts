import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuretestComponent } from './puretest.component';

describe('PuretestComponent', () => {
  let component: PuretestComponent;
  let fixture: ComponentFixture<PuretestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuretestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuretestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
