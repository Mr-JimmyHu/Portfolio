import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import {
  faJs,
  faHtml5,
  faCss3,
  faAngular,
  faReact,
  faNode,
  faJava,
  faGit,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss'],
})
export class ExpertiseComponent {
  constructor(public nav: NavbarService) {
    this.nav.show();
  }
  faJs = faJs;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faAngular = faAngular;
  faReact = faReact;
  faNode = faNode;
  faJava = faJava;
  faGit = faGit;
}
