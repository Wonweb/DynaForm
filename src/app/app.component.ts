
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.less']
})

export class AppComponent {
  isMenuCollapsed = false;

  public onMenuCollapsed($event) {
    this.isMenuCollapsed = $event;
  }
}
