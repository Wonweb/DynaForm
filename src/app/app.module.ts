import { DesignerFirebaseDBService } from './services/designer/designer-firebase-db.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToolboxComponent } from './components/designer/toolbox/toolbox.component';
import { FormDesignerComponent } from './components/designer/form-designer/form-designer.component';
import { DndModule } from 'ng2-dnd';
import { ControlDesignerComponent } from './components/designer/control-designer/control-designer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolboxComponent,
    FormDesignerComponent,
    ControlDesignerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DndModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [DesignerFirebaseDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
