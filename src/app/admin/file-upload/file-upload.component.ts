import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit, OnDestroy {
  //main tast
  task: AngularFireUploadTask;

  //Progress monitering
  percentage: Observable<number>;

  snapshot: Observable<any>;
  //Download URL
  downloadURL: Observable<string>;
  //dropzone css
  isHovering: boolean;
  //databaselist
  imageList: AngularFireList<any>;
  //url
  urlString: String;


  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {

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
    this.snapshot = this.task.snapshotChanges()
    this.snapshot.pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          this.downloadURL.subscribe(url => {
            // console.log(url);
            //To be refactored using rxjs observables
            const time = new Date();
            this.db.list("images").push({
              url: url,
              name: file.name,
              size: snap.totalBytes,
              time: time
            });
          });
        }
      })
    )


    //file url
    this.downloadURL = this.storage.ref(path).getDownloadURL();



  }

  //dETERMINS if upload task is actiove
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;

  }

}
