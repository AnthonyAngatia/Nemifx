import { Component, OnInit, ViewChild } from '@angular/core';
import { Upload } from '../upload';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ck-editor-form-sample',
  templateUrl: './ck-editor-form-sample.component.html',
  styleUrls: ['./ck-editor-form-sample.component.css']
})
export class CkEditorFormSampleComponent implements OnInit {
  @ViewChild('demoForm') demoForm?: NgForm;
  types = ["text", "audio", "video"];
  today: any = Date();
  randomText = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellat! Omnis minima repellendus aperiam in facilis, ipsum harum quos, natus officia nemo eum et. Quibusdam numquam velit autem rerum alias?Architecto esse unde fugiat id voluptatem itaque illo maiores blanditiis provident, cum cumque dolor rerum tempora asperiores quis nesciunt ipsa dolore. Eos dolores error suscipit sunt architecto animi beatae quos?</p>";

  model = new Upload("My title", this.types[0], this.today, "3:30", this.randomText);

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(demoForm) {
    console.log(demoForm);

  }

  reset() {
    this.demoForm!.reset();
  }

}
