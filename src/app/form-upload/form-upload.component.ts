import { Component, OnInit } from '@angular/core';
import { Upload } from '../upload';
import { UploadService } from '../upload.service';
import { CKEditor4 } from 'ckeditor4-angular';
import { MatDialogRef } from '@angular/material/dialog';
import { title } from 'process';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
  today: any = Date();
  model: Upload = new Upload();
  TITLE: string = this.uploadService.TITLE;
  EDITORCONTENT: string = this.uploadService.EDITORCONTENT;



  constructor(private uploadService: UploadService, private dialogRef: MatDialogRef<FormUploadComponent>) { }

  ngOnInit(): void {
    this.model = this.uploadService.uploads;
  }

  onSubmit(formData) {
    // console.log(formData);
    localStorage.removeItem(this.TITLE);
    localStorage.removeItem(this.EDITORCONTENT);
    if (formData.$key == null) {
      this.uploadService.insertData(formData);
      alert("Succesfully added");
    }
    else {
      this.uploadService.updateData(formData);
      alert("Succesfully updated");

    }
    this.dialogRef.close();
  }

  //TODO: Implemented later within own dialog box
  onClear() {
    this.model = new Upload();
    localStorage.removeItem(this.uploadService.TITLE);
    localStorage.removeItem(this.uploadService.EDITORCONTENT);

  }
  onClose(uploadForm) {
    this.dialogRef.close();
  }
  public onChange(event: CKEditor4.EventInfo) {
    const editorContent = event.editor.getData()
    // console.log(editorContent);
    localStorage.setItem(this.EDITORCONTENT, editorContent);
  }
  onTitleChange(input) {
    const title = input.value;
    // console.log(title);
    localStorage.setItem(this.TITLE, title);
  }
}
