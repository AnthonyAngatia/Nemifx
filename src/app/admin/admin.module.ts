import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUploadComponent } from '../form-upload/form-upload.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { AdminComponent } from './admin.component';
import { FooterComponent } from '../footer/footer.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    FormUploadComponent,
    AdminComponent,
    FooterComponent,
    DropZoneDirective,
    FileUploadComponent



  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CKEditorModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [FooterComponent]

})
export class AdminModule { }
