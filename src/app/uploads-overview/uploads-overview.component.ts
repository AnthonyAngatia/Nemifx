import { Component, OnInit, OnDestroy } from '@angular/core';
import { UploadService } from '../upload.service';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-uploads-overview',
  templateUrl: './uploads-overview.component.html',
  styleUrls: ['./uploads-overview.component.css'],
})
export class UploadsOverviewComponent implements OnInit, OnDestroy {
  panelOpenState: boolean;
  uploads: any[] = [1, 2, 3, 4];
  uploadsSubscription: Subscription;
  constructor(private uploadService: UploadService, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    let uploads = this.uploadService.getLastTenEntries();
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
}
