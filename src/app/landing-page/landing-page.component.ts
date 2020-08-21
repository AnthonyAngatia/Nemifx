import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import * as firebase from 'firebase/app';
import "firebase/performance";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  perf = firebase.performance();


  screenTrace: firebase.performance.Trace;


  constructor() { }

  ngOnInit(): void {
    this.screenTrace = this.perf.trace('landingPageScreen');
    this.screenTrace.start();
  }

  ngOnDestroy(): void {
    this.screenTrace.stop();
  }
  onClickTrendAnalysis() {
    alert("This feature is under maintenance. Please come back later. Apologies for any inconvenience caused. ");
  }

}
