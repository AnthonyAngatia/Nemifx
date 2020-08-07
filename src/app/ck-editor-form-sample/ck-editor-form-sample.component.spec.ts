import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkEditorFormSampleComponent } from './ck-editor-form-sample.component';

describe('CkEditorFormSampleComponent', () => {
  let component: CkEditorFormSampleComponent;
  let fixture: ComponentFixture<CkEditorFormSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkEditorFormSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkEditorFormSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
