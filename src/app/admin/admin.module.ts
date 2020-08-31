import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUploadComponent } from '../form-upload/form-upload.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { AdminComponent } from './admin.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    FormUploadComponent,
    AdminComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    CKEditorModule,
    MatTableModule,
    SharedModule

  ]
})
export class AdminModule { }
