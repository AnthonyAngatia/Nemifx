import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UploadsComponent } from './uploads/uploads.component';
import { UploadsOverviewComponent } from './uploads-overview/uploads-overview.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminComponent } from './admin/admin.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: "AIzaSyDDqzgI6RwYAJcXdhWJxnPs3k52o04Xo6k",
  authDomain: "nemifx-e5e7c.firebaseapp.com",
  databaseURL: "https://nemifx-e5e7c.firebaseio.com",
  projectId: "nemifx-e5e7c",
  storageBucket: "nemifx-e5e7c.appspot.com",
  messagingSenderId: "964083208944",
  appId: "1:964083208944:web:0bfc10ca11d6abfd18a835",
  measurementId: "G-NLPYFTT71Y"
};

@NgModule({
  declarations: [AppComponent, UploadsComponent, UploadsOverviewComponent, LandingPageComponent, AdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
