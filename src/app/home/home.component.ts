import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
export class HomeComponent {
  faFacebook = faFacebook;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  content = false;
  constructor(public nav: NavbarService) {
    this.nav.hide();
  }
}
