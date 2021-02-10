import {Component, Input, OnInit, Output} from '@angular/core';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {EventEmitter} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

const NavAnimate = [trigger(
  'navFirst',
  [
    transition(
      ':enter',
      [
        style({height: 0, opacity: 0.6}),
        animate('0.3s',
          style({height: '*', opacity: 1}))
      ]
    ),
    transition(
      ':leave',
      [
        style({height: '*', opacity: 1}),
        animate('0.3s',
          style({height: 0, opacity: 0.6})),
      ]
    )
  ]
),
  ];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [NavAnimate],
})
export class HeaderComponent implements OnInit {
  faChevronDown = faChevronDown;
  faBars = faBars;
  isExpanded = false;
  isExpandedSecond = false;

  @Input()
  opened = false;
  @Output()
  eventEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  expand(): void {
    this.isExpanded = !this.isExpanded;
  }
  expandSecond(): void{
    this.isExpandedSecond = !this.isExpandedSecond;
  }

  toggleSideBar(): void {
    this.opened = !this.opened;
    this.eventEmitter.emit(this.opened);
  }
}
