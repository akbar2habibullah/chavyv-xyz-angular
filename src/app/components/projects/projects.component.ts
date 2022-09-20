import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('hover', [
      state(
        'mouseIn',
        style({
          opacity: 1,
        })
      ),
      state(
        'mouseOut',
        style({
          opacity: 0,
        })
      ),
      transition('mouseIn => mouseOut', [animate('0.3s')]),
      transition('mouseOut => mouseIn', [animate('0.7s')]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  @Input() projects: any[] = [];

  hoverId = '';

  mouseOver(projectId: string) {
    this.hoverId = projectId;
  }

  mouseOut() {
    this.hoverId = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
