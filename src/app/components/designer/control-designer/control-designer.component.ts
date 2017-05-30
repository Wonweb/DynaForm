import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-control-designer',
  templateUrl: './control-designer.component.html',
  styleUrls: ['./control-designer.component.less']
})
export class ControlDesignerComponent implements OnInit {
  @Input() control: any;
  childControls = Array<any>();
  @Output() remControl = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public addControl(childControl) {
    console.log(childControl);
    this.childControls.push(childControl);
  }

  removeControl() {
    this.remControl.emit(this.control);
  }

}
