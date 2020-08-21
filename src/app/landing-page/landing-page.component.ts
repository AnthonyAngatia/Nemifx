import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import * as firebase from 'firebase/app';
// import "firebase/performance";

// const perf = firebase.performance();
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  // screenTrace: firebase.performance.Trace;


  constructor() { }

  ngOnInit(): void {
    // this.screenTrace = perf.trace('landingPageScreen');
    // this.screenTrace.start();
  }

  ngOnDestroy(): void {
    // this.screenTrace.stop();
  }

}
