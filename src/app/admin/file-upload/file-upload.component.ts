import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  //main tast
  task: AngularFireUploadTask;

  //Progress monitering
  percentage: Observable<number>;

  snapshot: Observable<any>;
  //Download URL
  downloadURL: Observable<string>;
  //dropzone css
  isHovering: boolean;


  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    //the file object, filelist is like an array
    const file = event.item(0);

    //Validation

    //Optional
    const customMetadata = { app: 'My first uplad task' };

    //Path
    const path = `test/${new Date().getTime()}_${file.name}`;

    this.task = this.storage.upload(path, file, { customMetadata });

    //Monitor progress

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();


    //file url
    // this.downloadURL = this.task.downloadURL();
  }

  //dETERMINS if upload task is actiove
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;

  }

}
