import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showBurgerMenu: boolean;
  constructor(public nav: NavbarService) {}

  ngOnInit(): void {}
}
