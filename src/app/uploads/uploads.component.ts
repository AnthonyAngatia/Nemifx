import { Component, OnInit, OnDestroy } from '@angular/core';
import { UploadService } from '../upload.service';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(private uploadService: UploadService, private dialog: MatDialog, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    let uploads = this.uploadService.getLastThreeEntries();
    this.uploadsSubscription = uploads.snapshotChanges().subscribe(item => {
      this.uploads = [];
      item.forEach(element => {
        let uploadJsonObject = element.payload.toJSON();
        uploadJsonObject["editorContent"] = this.sanitizer.bypassSecurityTrustHtml(uploadJsonObject["editorContent"]);
        uploadJsonObject["$key"] = element.key;
        this.uploads.unshift(uploadJsonObject)
      })
    })
  }

  ngOnDestroy(): void {
    this.uploadsSubscription.unsubscribe();

  }

  lastThreeEntries() {
    this.uploads = [];
    let uploads = this.uploadService.getLastThreeEntries();
    this.uploadsSubscription = uploads.snapshotChanges().subscribe(item => {
      this.uploads = [];
      item.forEach(element => {
        let uploadJsonObject = element.payload.toJSON();
        uploadJsonObject["editorContent"] = this.sanitizer.bypassSecurityTrustHtml(uploadJsonObject["editorContent"]);
        uploadJsonObject["$key"] = element.key;
        this.uploads.unshift(uploadJsonObject)
      })
    })

  }
  lastTenEntries() {
    this.uploads = [];
    this.uploadService.getLastTenEntries().
      snapshotChanges().subscribe(item => {
        this.uploads = [];
        item.forEach(element => {
          let uploadJsonObject = element.payload.toJSON();
          uploadJsonObject["editorContent"] = this.sanitizer.bypassSecurityTrustHtml(uploadJsonObject["editorContent"]);
          uploadJsonObject["$key"] = element.key;
          this.uploads.unshift(uploadJsonObject)
        })
      })
  }
  allEntries() {
    this.uploads = [];
    this.uploadService.getAllEntries().
      snapshotChanges().subscribe(item => {
        this.uploads = [];
        item.forEach(element => {
          let uploadJsonObject = element.payload.toJSON();
          uploadJsonObject["editorContent"] = this.sanitizer.bypassSecurityTrustHtml(uploadJsonObject["editorContent"]);
          uploadJsonObject["$key"] = element.key;
          this.uploads.unshift(uploadJsonObject)
        })
      })

  }
}
