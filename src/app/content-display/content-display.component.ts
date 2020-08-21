import { Component, OnInit } from '@angular/core';
import { Upload } from '../upload';
import { UploadService } from '../upload.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-content-display',
  template: `
    <h3>
      {{model.title}}
    </h3>
    <div [innerHTML] = "model.editorContent"></div>
    <div>
      <button mat-raised-button color="accent" (click)="onClose()">Close</button>
  `,
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent implements OnInit {
  model: Upload;

  constructor(private uploadService: UploadService, private dialogRef: MatDialogRef<ContentDisplayComponent>) { }

  ngOnInit(): void {
    this.model = this.uploadService.uploads;
  }
  onClose() {
    this.dialogRef.close();
  }

}
