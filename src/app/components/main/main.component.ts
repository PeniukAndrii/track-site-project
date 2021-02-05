import {Component, OnInit} from '@angular/core';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  opened;
  faChevronDown = faChevronDown;
  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSideBarOpen(event): void {
    this.opened = event;
    console.log('event-', event);
  }

  closeBar(): void {
    console.log('opened-', this.opened);
    this.opened = !this.opened;
  }
}
