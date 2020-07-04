import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css'],
})
export class UploadsComponent implements OnInit {
  uploads: any[] = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}
}
