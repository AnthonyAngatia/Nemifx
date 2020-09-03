import { Component, OnInit, OnDestroy } from '@angular/core';
import { UploadService } from '../upload.service';
import { element } from 'protractor';
import { AngularFirePerformance } from '@angular/fire/performance';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-uploads-overview',
  templateUrl: './uploads-overview.component.html',
  styleUrls: ['./uploads-overview.component.css'],
})
export class UploadsOverviewComponent implements OnInit, OnDestroy {
  panelOpenState: boolean;
  uploads: any[] = [1, 2, 3, 4];
  uploadsSubscription: Subscription;
  constructor(private uploadService: UploadService) {

  }

  ngOnInit(): void {
    let uploads = this.uploadService.getData();
    this.uploadsSubscription = uploads.snapshotChanges().subscribe(item => {
      this.uploads = [];
      item.forEach(element => {
        let x = element.payload.toJSON()
        x["$key"] = element.key;
        // this.uploads.push(x);
        this.uploads.unshift(x)
      })
    })
  }
  ngOnDestroy(): void {
    this.uploadsSubscription.unsubscribe();

  }
}
