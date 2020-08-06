import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { UploadsComponent } from './uploads/uploads.component';
import { UploadsOverviewComponent } from './uploads-overview/uploads-overview.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminComponent } from './admin/admin.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table/data-table.component';

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
  declarations: [AppComponent, UploadsComponent, UploadsOverviewComponent, LandingPageComponent, AdminComponent, DataTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
