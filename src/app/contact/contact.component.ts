import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  faFacebook = faFacebook;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  constructor(public nav: NavbarService) {}

  ngOnInit(): void {
    this.nav.show();
  }
}
