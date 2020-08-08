import { Component, OnInit } from '@angular/core';
import { Upload } from '../upload';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-content-display',
  template: `
    <p>
      content-display works!
    </p>
    <div [innerHTML] = "model.editorContent"></div>
  `,
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent implements OnInit {
  model: Upload;

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
    this.model = this.uploadService.uploads;
  }

}
