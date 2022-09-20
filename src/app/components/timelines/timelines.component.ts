import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css'],
})
export class TimelinesComponent implements OnInit {
  @Input() timelines: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
