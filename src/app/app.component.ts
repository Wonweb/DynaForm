import { FirebaseListObservable } from 'angularfire2/database';
import { DesignerFirebaseDBService } from './services/designer/designer-firebase-db.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.less']
})

export class AppComponent {
  items: FirebaseListObservable<any[]>;
  menuCollapsed = true;

  title = 'app works!';

  constructor(db: DesignerFirebaseDBService) {
    this.items = db.getList('/Control');
  }

  setMenuState(state: boolean){
    this.menuCollapsed = state;
  }
}
