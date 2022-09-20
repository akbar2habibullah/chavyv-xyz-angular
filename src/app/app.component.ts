import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import * as CmsSelectors from './cms/cms.selectors';
import * as CmsActions from './cms/cms.actions';
import { environment } from 'src/environments/environment.variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loading: boolean = false;
  error: any = null;
  data: any = null;

  isDarkEnabled: boolean = false;

  toggleDarkMode = (): void => {
    this.isDarkEnabled = !this.isDarkEnabled;
  };

  constructor(
    private store: Store<{ loading: boolean; data: any; error: string }>,
    private meta: Meta
  ) {
    this.meta.addTags(environment.siteMetaData);
  }

  ngOnInit() {
    this.store.dispatch(CmsActions.loadData());
    this.store.select(CmsSelectors.selectCmsLoading).subscribe((loading) => {
      this.loading = loading;

      if (loading) {
        this.meta.addTags([
          {
            name: 'robots',
            content: 'noindex',
          },
        ]);
      } else {
        this.meta.removeTag('name="robots"');
      }
    });
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
