import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { DesignerFirebaseDBService } from '../../../services/designer/designer-firebase-db.service';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.less']
})
export class ToolboxComponent implements OnInit {
  controls: FirebaseListObservable<any[]>;
  controlProperties: Array<any>;

  constructor(db: DesignerFirebaseDBService) {
    this.controls = db.getList('/Control');
    db.getList('/ControlProperty').subscribe(controlProperties => {
      this.controlProperties = controlProperties;
    });
  }

  ngOnInit() { }
}
