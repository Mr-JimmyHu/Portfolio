import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private navSubject: BehaviorSubject<boolean>;
  public visible$: Observable<boolean>;

  constructor() {
    this.navSubject = new BehaviorSubject<boolean>(false);
    this.visible$ = this.navSubject.asObservable();
  }

  hide() {
    this.navSubject.next(false);
  }

  show() {
    this.navSubject.next(true);
  }
}
