import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class DesignerFirebaseDBService {

  constructor(private db: AngularFireDatabase) { }

  public getList(entityListPath: string) {
    return this.db.list(entityListPath);
  }

}
