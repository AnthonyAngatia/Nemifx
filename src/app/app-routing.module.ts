import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadsComponent } from './uploads/uploads.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminComponent } from './admin/admin.component';
import { CkEditorFormSampleComponent } from './ck-editor-form-sample/ck-editor-form-sample.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
  },
  { path: 'uploads', component: UploadsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'test', component: CkEditorFormSampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
