import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

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
  //images observables
  images: Observable<any>;
  imagesRef;
  imagesLimit: number;
  imagesArray: any[];


  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.imagesLimit = 5;
    this.imagesRef = this.db.list('images');
    this.db.list('images', ref => ref.limitToLast(this.imagesLimit)).valueChanges().subscribe(image => {
      this.imagesArray = [];
      image.forEach(item => this.imagesArray.unshift(item));
    })
  }
  ngOnDestroy(): void {

  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    //the file object, filelist is like an array
    // console.log(event);
    const file = event.item(0);

    //Validation
    if (file.type.split('/')[0] !== 'image') {
      alert("Unsupported file type " + file.type.split('/')[0]);
      return;
    }

    //Optional
    const customMetadata = { app: 'My first uplad task' };

    //Path
    const path = `test/${new Date().getTime()}_${file.name}`;

    this.task = this.storage.upload(path, file, { customMetadata });

    //Monitor progress

    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();
    this.snapshot.subscribe(snap => {
      console.log(snap);
      if (snap.bytesTransferred === snap.totalBytes) {
        this.downloadURL = this.storage.ref(path).getDownloadURL();
        this.downloadURL.subscribe(url => {
          const time = new Date();
          this.imagesRef.push({
            url: url,
            name: file.name,
            size: snap.totalBytes,
            time: time.toString()
          });
        });
      }

    });

  }

  //dETERMINS if upload task is actiove
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;

  }
  inProgress() {
    alert("This feature has not yet been completed. Please contact your developer.");
  }

}
