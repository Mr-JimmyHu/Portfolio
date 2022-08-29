import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss'],
})
export class ExpertiseComponent implements OnInit {
  constructor(public nav: NavbarService) {}

  ngOnInit(): void {
    this.nav.show();
  }
}
