import {Component, Input, OnInit, Output} from '@angular/core';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faChevronDown = faChevronDown;
  faBars = faBars;
  menuServiceOpen = false;
  menuAboutOpen = false;
  @Input()
  opened = false;
  @Output()
  eventEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  mouseEnter(): void {
    this.menuServiceOpen = !this.menuServiceOpen;
  }

  mouseEnterAbout(): void {
    if (this.menuAboutOpen) {
      setTimeout(() => {
        this.menuAboutOpen = false;
      }, 500);
    }
    this.menuAboutOpen = true;
  }

  toggleSideBar(): void {
    this.opened = !this.opened;
    this.eventEmitter.emit(this.opened);
  }
}
