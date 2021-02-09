import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PopComponent } from './pop/pop.component';
import { PopNewComponent } from './pop-new/pop-new.component';
import { PopListComponent } from './pop-list/pop-list.component';
import { PopModifComponent } from './pop-modif/pop-modif.component';

import { PopService } from './services/pop/pop.service';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

const appRoutes : Routes = [
  {
    path: 'pops',
    component: PopListComponent
  },
  {
    path: 'new',
    component: PopNewComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'modif/:id',
    component: PopModifComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PopComponent,
    PopNewComponent,
    PopListComponent,
    PopModifComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    PopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
