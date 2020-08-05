import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { element } from 'protractor';

@Component({
  selector: 'app-uploads-overview',
  templateUrl: './uploads-overview.component.html',
  styleUrls: ['./uploads-overview.component.css'],
})
export class UploadsOverviewComponent implements OnInit {
  uploads: any[] = [1, 2, 3, 4];
  constructor(private uploadService: UploadService) {

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
        this.uploads.push(x);
      })
    })
  }
}
