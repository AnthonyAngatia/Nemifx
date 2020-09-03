import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puretest',
  templateUrl: './puretest.component.html',
  styleUrls: ['./puretest.component.css']
})
export class PuretestComponent implements OnInit {
  panelOpenState: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
