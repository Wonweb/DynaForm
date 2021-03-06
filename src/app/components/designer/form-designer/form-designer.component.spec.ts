import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesignerComponent } from './form-designer.component';

describe('FormDesignerComponent', () => {
  let component: FormDesignerComponent;
  let fixture: ComponentFixture<FormDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
