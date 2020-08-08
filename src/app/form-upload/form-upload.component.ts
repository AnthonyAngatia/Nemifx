import { Component, OnInit } from '@angular/core';
import { Upload } from '../upload';
import { UploadService } from '../upload.service';
import { CKEditor4 } from 'ckeditor4-angular';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
  today: any = Date();
  model: Upload = new Upload();



  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
    this.model = this.uploadService.uploads;
  }

  onSubmit(formData) {
    // console.log(formData);
    if (formData.$key == null) {
      this.uploadService.insertData(formData);
      alert("Succesfully added");
    }
    else {
      this.uploadService.updateData(formData);
      alert("Succesfully updated");

    }

    //TODO: Close the dialog box USE MATDIALOGREF

  }

  onChange(event: CKEditor4.EventInfo) {
    //Gor debugging purpose
    // console.log(event.editor.getData());
  }
  //TODO: Implemented later within own dialog box
  onPreview() {
    confirm("This feature has not been enabled yet. Please wait for the next release of this application to use this feature");

  }

}
