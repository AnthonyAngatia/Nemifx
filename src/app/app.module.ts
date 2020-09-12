import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirePerformanceModule } from "@angular/fire/performance";
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';

import { UploadsComponent } from './uploads/uploads.component';
import { UploadsOverviewComponent } from './uploads-overview/uploads-overview.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { environment } from 'src/environments/environment';
import { ContentDisplayComponent } from './content-display/content-display.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminModule } from './admin/admin.module';
import { PuretestComponent } from './puretest/puretest.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, UploadsComponent, UploadsOverviewComponent, LandingPageComponent, ContentDisplayComponent, NavBarComponent, PuretestComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirePerformanceModule,
    AngularFireStorageModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    AdminModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
