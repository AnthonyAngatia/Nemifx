import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css'],
})
export class UploadsComponent implements OnInit {
  uploads: any[];
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
