import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { Upload } from '../upload';
import { MatDialog } from '@angular/material/dialog';
import { ContentDisplayComponent } from '../content-display/content-display.component';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css'],
})
export class UploadsComponent implements OnInit {
  uploads: any[];
  constructor(private uploadService: UploadService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    let uploads = this.uploadService.getData();
    uploads.snapshotChanges().subscribe(item => {
      this.uploads = [];
      item.forEach(element => {
        let x = element.payload.toJSON()
        console.log(x);
        x["$key"] = element.key;
        console.log(x);
        this.uploads.unshift(x)
      })
    })
  }

  onOpen(upload: Upload) {
    this.uploadService.uploads = upload;
    this.dialog.open(ContentDisplayComponent);



  }
}
