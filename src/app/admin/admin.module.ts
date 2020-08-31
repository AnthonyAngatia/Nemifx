import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUploadComponent } from '../form-upload/form-upload.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { AdminComponent } from './admin.component';
import { FooterComponent } from '../footer/footer.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    FormUploadComponent,
    AdminComponent,
    FooterComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    MatTableModule

  ]
})
export class AdminModule { }
