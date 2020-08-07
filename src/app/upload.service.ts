import { Injectable } from '@angular/core';
import { Upload } from './upload';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  uploadsList: AngularFireList<any>;
  // selectedUpload:Upload = new Upload();

  constructor(private firebaseDb: AngularFireDatabase) {
    this.uploadsList = this.firebaseDb.list("uploads");
  }

  getData() {
    this.uploadsList = this.firebaseDb.list('uploads');
    return this.uploadsList;
  }
  insertData(upload: Upload) {
    firebase.database().ref("uploads").push({
      title: upload.title,
      content: upload.content,
      readTime: upload.readTime,
      time: upload.time
    });
  }
  deleteData(key: string) {
    this.uploadsList.remove(key);

  }

}
