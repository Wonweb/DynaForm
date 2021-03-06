import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-designer',
  templateUrl: './form-designer.component.html',
  styleUrls: ['./form-designer.component.less']
})

export class FormDesignerComponent implements OnInit {
  @Output() menuCollapsed = new EventEmitter<boolean>();
  isMenuCollapsed = false;
  controls = Array<any>();

  constructor() { }

  ngOnInit() {
  }

  public addControl(control) {
    console.log(control);
    this.controls.push(control);
  }

  removeControl(remControl) {
    const index = this.controls.indexOf(remControl);
    this.controls.splice(index, 1);
  }

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.menuCollapsed.emit(this.isMenuCollapsed);
  }
}
