import { Component, OnInit } from '@angular/core';
import { Upload } from '../upload';
import { UploadService } from '../upload.service';
import { CKEditor4 } from 'ckeditor4-angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  types = ["text", "audio", "video"];
  today: any = Date();
  uploads: any[];
  randomText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellat! Omnis minima repellendus aperiam in facilis, ipsum harum quos, natus officia nemo eum et. Quibusdam numquam velit autem rerum alias?Architecto esse unde fugiat id voluptatem itaque illo maiores blanditiis provident, cum cumque dolor rerum tempora asperiores quis nesciunt ipsa dolore. Eos dolores error suscipit sunt architecto animi beatae quos?";

  model = new Upload("My title", this.types[0], this.today, "3:30", this.randomText);

  constructor(private uploadService: UploadService) { }


  ngOnInit() {
    let uploads = this.uploadService.getData();
    uploads.snapshotChanges().subscribe(item => {
      this.uploads = [];
      item.forEach(element => {
        let x = element.payload.toJSON()
        // console.log(x);
        x["$key"] = element.key;
        // console.log(x);
        this.uploads.push(x);
      })
    })
  }

  onSubmit(uploadsData) {
    console.log(uploadsData);
    this.uploadService.insertData(uploadsData);

  }

  onChange(event: CKEditor4.EventInfo) {
    console.log(event.editor.getData());
  }

}
