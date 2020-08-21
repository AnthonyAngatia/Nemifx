import { Component, OnInit, OnDestroy } from '@angular/core';
import { UploadService } from '../upload.service';
import { Upload } from '../upload';
import { MatDialog } from '@angular/material/dialog';
import { ContentDisplayComponent } from '../content-display/content-display.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css'],
})
export class UploadsComponent implements OnInit, OnDestroy {
  uploads: any[];
  uploadsSubscription: Subscription;
  constructor(private uploadService: UploadService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    let uploads = this.uploadService.getData();
    this.uploadsSubscription = uploads.snapshotChanges().subscribe(item => {
      this.uploads = [];
      item.forEach(element => {
        let x = element.payload.toJSON()
        x["$key"] = element.key;
        this.uploads.unshift(x)
      })
    })
  }

  ngOnDestroy(): void {
    this.uploadsSubscription.unsubscribe();

  }

  onOpen(upload: Upload) {
    this.uploadService.uploads = upload;
    this.dialog.open(ContentDisplayComponent);



  }
}
