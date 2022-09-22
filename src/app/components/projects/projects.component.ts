import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  @Input() projects: any[] = [];

  hoverId = '';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    let elements = document.createElement('style');
    let target = document.getElementById('css-keyframes');

    elements.innerHTML = `
      @keyframes fadeShow {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeHide {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `;

    if (target?.getAttribute('data') === 'null') {
      target?.appendChild(elements);
      target.setAttribute('data', 'fill');
    }

    this.projects.forEach((project) => {
      let elements = document.createElement('style');
      let target = document.getElementById('css-' + project.id);

      elements.innerHTML = `
            #project-card-${project.id}:hover > div:first-child {
              animation: fadeHide 0.15s ease-in-out forwards;
            }

            #project-card-${project.id} > div:first-child {
              animation: fadeShow 0.3s ease-in-out forwards;
            }

            #project-card-${project.id}:hover > div:last-child {
              animation: fadeShow 0.3s ease-in-out forwards;
            }

            #project-card-${project.id} > div:last-child {
              animation: fadeHide 0.15s ease-in-out forwards;
            }
          `;

      if (target?.getAttribute('data') === 'null') {
        target?.appendChild(elements);
        target.setAttribute('data', 'fill');
      }
    });
  }
}
