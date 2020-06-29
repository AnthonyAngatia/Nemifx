import { Component } from '@angular/core';

import { Rellax } from 'Rellax';
declare var Rellax: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nemifx4';
  rellax = new Rellax('.rellax');
}
