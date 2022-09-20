import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-dark-mode-toggler',
  templateUrl: './dark-mode-toggler.component.html',
  styleUrls: ['./dark-mode-toggler.component.css'],
})
export class DarkModeTogglerComponent implements OnInit {
  faSun = faSun;
  faMoon = faMoon;
  icon = this.faMoon;

  @Input() isDarkEnabled = false;
  @Output() toggleDarkModeEvent = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.toggleDarkModeEvent.emit();
  }

  constructor() {}

  ngOnChanges() {
    if (this.isDarkEnabled) {
      this.icon = this.faSun;
    } else {
      this.icon = this.faMoon;
    }
  }

  ngOnInit(): void {}
}
