import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadsComponent } from './uploads/uploads.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminComponent } from './admin/admin.component';
import { FileUploadComponent } from './admin/file-upload/file-upload.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormUploadComponent} from './form-upload/form-upload.component';

const routes: Routes = [
  { path: 'uploads', component: UploadsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'fileupload', component: FileUploadComponent },
  {path: 'addpost', component: FormUploadComponent},
  {
    path: '', component: LandingPageComponent, pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
