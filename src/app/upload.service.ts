import { Injectable } from '@angular/core';
import { Upload } from './upload';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import * as firebase from "firebase/app";
import 'firebase/database';
import { AngularFirePerformance } from '@angular/fire/performance';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  uploadsList: AngularFireList<any>;
  randomText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellat! Omnis minima repellendus aperiam in facilis, ipsum harum quos, natus officia nemo eum et. Quibusdam numquam velit autem rerum alias?Architecto esse unde fugiat id voluptatem itaque illo maiores blanditiis provident, cum cumque dolor rerum tempora asperiores quis nesciunt ipsa dolore. Eos dolores error suscipit sunt architecto animi beatae quos?";
  uploads: Upload;
  // selectedUpload:Upload = new Upload();

  constructor(private firebaseDb: AngularFireDatabase, private perf: AngularFirePerformance) {
    this.uploadsList = this.firebaseDb.list("uploads");
  }

  initializeForm() {
    const upload = {
      $key: null,
      title: "My title goes here and it can extend till somewhere here",
      time: "",
      editorContent: this.randomText
    }
    return this.uploads = upload;
  }

  populateForm(content: Upload) {
    this.initializeForm();
    this.uploads.$key = content.$key;
    this.uploads.title = content.title;
    this.uploads.time = content.time;
    this.uploads.editorContent = content.editorContent;
    return this.uploads;

  }

  getLastThreeEntries() {
    this.uploadsList = this.firebaseDb.list('uploads', query => {
      return query.limitToFirst(3);
    });
    return this.uploadsList;
  }
  getLastTenEntries() {
    this.uploadsList = this.firebaseDb.list('uploads', query => {
      return query.limitToFirst(10);
    });
    return this.uploadsList;

  }
  getAllEntries() {
    this.uploadsList = this.firebaseDb.list('uploads');
    return this.uploadsList;

  }
  insertData(upload: Upload) {
    upload.time = Date();
    delete upload.$key;
    firebase.database().ref("uploads").push(upload);
    this.initializeForm();
  }
  deleteData(key: string) {
    this.uploadsList.remove(key);
  }
  updateData(upload: Upload) {
    this.uploadsList.update(upload.$key, {
      title: upload.title,
      time: upload.time,
      editorContent: upload.editorContent
    });
    this.initializeForm();
  }

}
