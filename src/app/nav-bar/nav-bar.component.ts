import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
  
  <mat-drawer #drawer mode="side"  >
    <button mat-icon-button class="example-icon" aria-label="Close" (click)="drawer.toggle()">
      <mat-icon >close</mat-icon>
    </button>
    <nav class="nav_links_side">
      <li routerLink ="/uploads"><a>Recent Posts</a></li>
      <li><a href="https://t.me/nemifx_moneymining" target="_blank" rel="noopener noreferrer" style="color:white">Telegram Group</a></li>
    </nav>        
  </mat-drawer>
  <mat-toolbar class="mat-toolbar">
  <button  class="burger-btn" mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon" (click)="drawer.toggle()" >
    <mat-icon>menu</mat-icon>
  </button>
  <span>
    <img class="logo" src="assets/nemilogo.png" alt="Logo" routerLink="/landing" />
  </span>
  <span class="example-spacer" style="flex: 1 1 auto"></span>
  <nav class="nav_links">
            <li routerLink ="/uploads">Recent Posts</li>
            <li><a href="https://t.me/nemifx_moneymining" target="_blank" rel="noopener noreferrer" style="color:white">Telegram Group</a></li>
            <!-- <li class="analysis" >Analysis</li> -->
            <!-- <li>Crypto markets</li> -->
            <!-- <li>Community</li> -->
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
      console.log("dasa");
      element.classList.add('mat-toolbar2');
    } else {
      element.classList.remove('mat-toolbar2');
    }
  }
  //   <div class="nav_container">
  //   <header class="header">
  //       <img class="logo" src="assets/nemilogo.png" alt="Logo" routerLink="/landing" />
  // <nav class="nav_links">
  //     <li routerLink ="/uploads">Recent Posts</li>
  //     <li><a href="https://t.me/nemifx_moneymining" target="_blank" rel="noopener noreferrer" style="color:white">Telegram Group</a></li>
  //     <!-- <li class="analysis" >Analysis</li> -->
  //     <!-- <li>Crypto markets</li> -->
  //     <!-- <li>Community</li> -->
  // </nav>
  //   </header>
  // </div>

}
