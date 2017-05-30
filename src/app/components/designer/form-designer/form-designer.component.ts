import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-designer',
  templateUrl: './form-designer.component.html',
  styleUrls: ['./form-designer.component.less']
})

export class FormDesignerComponent implements OnInit {
  @Input() isMenuCollapsed: false;
  controls = Array<any>();  

  constructor() { }

  ngOnInit() {
  }

  public addControl(control) {
    console.log(control);
    this.controls.push(control);
  }

  removeControl(remControl) {
    let index = this.controls.indexOf(remControl);
    this.controls.splice(index, 1);
  }
}
