import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faFacebook = faFacebook;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  content = false;
  constructor(public nav: NavbarService) {}

  ngOnInit(): void {
    this.nav.hide();
  }
}
