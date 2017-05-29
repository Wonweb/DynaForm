import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDesignerComponent } from './control-designer.component';

describe('ControlDesignerComponent', () => {
  let component: ControlDesignerComponent;
  let fixture: ComponentFixture<ControlDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
