import { Component, OnInit, HostListener } from '@angular/core';
import { MAT_DRAWER_CONTAINER } from '@angular/material/sidenav/drawer';

@Component({
  selector: 'app-nav-bar',
  template: `
  
  <mat-drawer #drawer >
    <button mat-icon-button class="example-icon" aria-label="Close" (click)="drawer.toggle()">
      <mat-icon >close</mat-icon>
    </button>
    <nav class="nav_links_side">
      <ul>
      <li>
      <a routerLink ="/uploads">Recent Posts</a>
    </li>
      <li>
        <a href="https://t.me/nemifx_moneymining" target="_blank" rel="noopener noreferrer">Telegram Group</a>
      </li>
</ul>

    </nav>     
  </mat-drawer>
  <!-- Desktop Navigation view -->
  <mat-toolbar class="mat-toolbar">

  <button  class="burger-btn" mat-icon-button  aria-label="Example icon-button with menu icon" (click)="drawer.toggle()" >
    <mat-icon>menu</mat-icon>
  </button>

  <span class="nav_spacer_2">
    <a routerLink="/"> <img class="logo" src="assets/nemilogo.png" alt="Logo"/> </a>
  </span>
  <!--  Navigation links on Right Side -->
  <span class ="nav_spacer_1" style="flex: 1 1 auto">
  <a routerLink="/"><b> Nemi Fx</b> </a>
</span>
  <span class ="nav_spacer_2" style="flex: 1 1 auto"></span>
  <nav class="nav_links">
    <ul>
            <li><a routerLink ="/uploads" style="color:white">Recent Posts </a></li>
            <li><a href="https://t.me/nemifx_moneymining" target="_blank" rel="noopener noreferrer" style="color:white">Telegram Group</a></li>
            <!-- <li class="analysis" >Analysis</li> -->
            <!-- <li>Crypto markets</li> -->
            <!-- <li>Community</li> -->
</ul>
  </nav>
</mat-toolbar>

    
  `,
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {

    let element = document.querySelector('.mat-toolbar');
    if (window.pageYOffset > 140) {

      element.classList.add('mat-toolbar2');
    } else {
      element.classList.remove('mat-toolbar2');
    }
  }

}
