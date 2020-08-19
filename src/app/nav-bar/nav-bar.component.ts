import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <div class="nav_container">
    <header class="header">
        <img class="logo" src="assets/nemilogo.png" alt="Logo" routerLink="/landing" />
        <nav class="nav_links">
            <li routerLink ="/uploads">Recent Posts</li>
            <!-- <li class="analysis" >Analysis</li> -->
            <!-- <li>Crypto markets</li> -->
            <!-- <li>Community</li> -->
        </nav>
    </header>
</div>
  `,
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    let element = document.querySelector('.nav_container');
    if (window.pageYOffset > 140) {
      element.classList.add('nav_container2');
    } else {
      element.classList.remove('nav_container2');
    }
  }


}
