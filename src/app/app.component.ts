import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CmsSelectors from './cms/cms.selectors';
import * as CmsActions from './cms/cms.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loading: boolean = false;
  error: any = null;
  data: any = null;

  constructor(
    private store: Store<{ loading: boolean; data: any; error: string }>
  ) {}

  ngOnInit() {
    this.store.dispatch(CmsActions.loadData());
    this.store.select(CmsSelectors.selectCmsError).subscribe((error) => {
      this.error = error;
      if (error) {
        console.log('Error: ' + error);
      }
    });
    this.store.select(CmsSelectors.selectCmsData).subscribe((data) => {
      if (data) {
        this.data = data;
      }
    });
  }
}
