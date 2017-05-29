import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { DesignerFirebaseDBService } from '../../../services/designer/designer-firebase-db.service';


@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.less']
})
export class ToolboxComponent implements OnInit {
  @Output() menuCollapsed = new EventEmitter<boolean>();
  isMenuCollapsed = false;
  controls: FirebaseListObservable<any[]>;

  constructor(db: DesignerFirebaseDBService) {
    this.controls = db.getList('/Control');
  }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.menuCollapsed.emit(this.isMenuCollapsed);
  }

}
