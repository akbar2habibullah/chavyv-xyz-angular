import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  @Input() image: string = '';
  @Input() resumeLink: string = '';
  @Input() introduction: string = '';

  constructor() {}

  ngOnInit(): void {}
}
