import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.less']
})
export class ToolboxComponent implements OnInit {
  @Output() menuCollapsed = new EventEmitter<boolean>();
  isMenuCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.menuCollapsed.emit(this.isMenuCollapsed);
  }

}
