import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadsComponent } from './uploads/uploads.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminComponent } from './admin/admin.component';
import { PuretestComponent } from './puretest/puretest.component';

const routes: Routes = [
  { path: 'uploads', component: UploadsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'test', component: PuretestComponent },
  {
    path: '', component: LandingPageComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
