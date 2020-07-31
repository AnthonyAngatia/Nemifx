import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploads-overview',
  templateUrl: './uploads-overview.component.html',
  styleUrls: ['./uploads-overview.component.css'],
})
export class UploadsOverviewComponent implements OnInit {
  uploads: any[] = [1, 2, 3, 4];
  constructor() {}

  ngOnInit(): void {}
}
