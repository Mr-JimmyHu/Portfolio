import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showBurgerMenu: boolean;
  url: any;
  constructor(public nav: NavbarService, private readonly router: Router) {}

  ngOnInit(): void {
    this.changeActiveTab();
  }

  changeActiveTab() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.url = e.url.substring(1);
        console.log(this.url);
      }
    });
  }
}
