/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import { Upload } from '../upload';
import { UploadService } from '../upload.service';
import { CKEditor4 } from 'ckeditor4-angular';
import {FormBuilder, FormGroup} from '@angular/forms';

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
  uploadForm: FormGroup;
  upload: Upload = new Upload();



  constructor(private uploadService: UploadService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.model = this.uploadService.uploads;
    this.uploadForm = this.fb.group({
      title: ['My title is here'],
      editorContent: [{value: this.EDITORCONTENT, disabled: false}]
    });
  }

  onSubmit() {
    // console.log(formData);
    localStorage.removeItem(this.TITLE);
    localStorage.removeItem(this.EDITORCONTENT);
    console.log(this.uploadForm.value);
    const formData = this.uploadForm.value;

    if (formData.$key == null) {
      this.uploadService.insertData(formData);
      alert('Successfully added');
    }
    else {
      this.uploadService.updateData(formData);
      alert('Successfully updated');

    }
  }

  onClear() {
    this.model = new Upload();
    localStorage.removeItem(this.uploadService.TITLE);
    localStorage.removeItem(this.uploadService.EDITORCONTENT);

  }
  onClose(uploadForm) {
    // this.dialogRef.close();
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
