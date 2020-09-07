import { Component, OnInit, OnDestroy } from '@angular/core';
import { UploadService } from '../upload.service';
import { Upload } from '../upload';
import { MatDialog } from '@angular/material/dialog';
import { ContentDisplayComponent } from '../content-display/content-display.component';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css'],
})
export class UploadsComponent implements OnInit, OnDestroy {
  panelOpenState: boolean;
  uploads: any[];
  uploadsSubscription: Subscription;
  constructor(private uploadService: UploadService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    let uploads = this.uploadService.getLastThreeEntries();
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

  lastThreeEntries() {
    this.uploads = [];
    let uploads = this.uploadService.getLastThreeEntries();
    this.uploadsSubscription = uploads.snapshotChanges().subscribe(item => {
      this.uploads = [];
      item.forEach(element => {
        let x = element.payload.toJSON()
        x["$key"] = element.key;
        this.uploads.unshift(x)
      })
    })

  }
  lastTenEntries() {
    this.uploads = [];
    this.uploadService.getLastTenEntries().
      snapshotChanges().subscribe(item => {
        this.uploads = [];
        item.forEach(element => {
          let x = element.payload.toJSON()
          x["$key"] = element.key;
          this.uploads.unshift(x)
        })
      })
  }
  allEntries() {
    this.uploads = [];
    this.uploadService.getAllEntries().
      snapshotChanges().subscribe(item => {
        this.uploads = [];
        item.forEach(element => {
          let x = element.payload.toJSON()
          x["$key"] = element.key;
          this.uploads.unshift(x)
        })
      })

  }
}
