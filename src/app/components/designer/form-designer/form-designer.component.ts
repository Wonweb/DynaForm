import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-designer',
  templateUrl: './form-designer.component.html',
  styleUrls: ['./form-designer.component.less']
})

export class FormDesignerComponent implements OnInit {
  @Input() isMenuCollapsed: false;

  constructor() { }

  ngOnInit() {
  }

  public addControl($event) {
    console.log($event);
  }

}
