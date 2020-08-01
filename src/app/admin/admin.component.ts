import { Component, OnInit } from '@angular/core';
import { Upload } from '../upload';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  types = ["text", "videos", "audio"];
  randomText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellat! Omnis minima repellendus aperiam in facilis, ipsum harum quos, natus officia nemo eum et. Quibusdam numquam velit autem rerum alias?Architecto esse unde fugiat id voluptatem itaque illo maiores blanditiis provident, cum cumque dolor rerum tempora asperiores quis nesciunt ipsa dolore. Eos dolores error suscipit sunt architecto animi beatae quos?";

  model = new Upload("My title", this.types[0], "3:30", "3:30", this.randomText);

  constructor() { }

  ngOnInit() {
  }
  onSubmit(uploadsData) {
    console.log("Something")
    console.log(uploadsData)

  }

}
