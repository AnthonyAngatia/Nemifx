/* tslint:disable:no-trailing-whitespace quotemark */
import { Component, OnInit } from '@angular/core';
import { Upload } from '../upload';
import { UploadService } from '../upload.service';
import { CKEditor4 } from 'ckeditor4-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
  today: any = Date();
  model: Upload = new Upload();
  Title: string = this.uploadService.TITLE;
  EditorContent: string = this.uploadService.EDITORCONTENT;
  uploadForm: FormGroup;
  upload: Upload = new Upload();
  private randomText = 'Post Content';



  constructor(private uploadService: UploadService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.model = this.uploadService.uploads;
    // console.log(this.model);
    const title =  (localStorage.getItem(this.Title) ? localStorage.getItem(this.Title) : this.model.title);
    const editorContent =    (localStorage.getItem(this.EditorContent) ? localStorage.getItem(this.EditorContent) : this.model.editorContent);

    this.uploadForm = this.fb.group({
      title,
      editorContent
    });
  }

  onSubmit() {
    // console.log(formData);
    localStorage.removeItem(this.Title);
    localStorage.removeItem(this.EditorContent);
    console.log(this.uploadForm.value);
    const formData = this.uploadForm.value;

    if (this.model.$key == null) {
      this.uploadService.insertData(formData);
      alert('Successfully added');
    }
    else {
      formData.$key = this.model.$key;
      formData.time = this.model.time;
      this.uploadService.updateData(formData);
      alert('Successfully updated');

    }
    this.router.navigate(['admin'])
  }
  textAreaEdit(value: string){
    this.uploadForm.patchValue({
      editorContent: value
    });
  }

  onClear() {
    console.log("here");
    this.model = new Upload();
    localStorage.removeItem(this.uploadService.TITLE);
    localStorage.removeItem(this.uploadService.EDITORCONTENT);
    this.uploadForm.setValue({
      title: null,
      editorContent: null
    });
  }
  public onChange(event: CKEditor4.EventInfo) {
    const editorContent = event.editor.getData();
    localStorage.setItem(this.EditorContent, editorContent);
  }
  onTitleChange(input) {
    const title = input.value;
    // console.log(title);
    localStorage.setItem(this.Title, title);
  }
}
