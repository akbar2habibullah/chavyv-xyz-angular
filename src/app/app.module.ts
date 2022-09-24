import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { CmsEffects } from './cms/cms.effects';
import { cmsReducer } from './cms/cms.reducer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { TopLineComponent } from './components/top-line/top-line.component';
import { DarkModeTogglerComponent } from './components/dark-mode-toggler/dark-mode-toggler.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CoverComponent } from './components/cover/cover.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TimelinesComponent } from './components/timelines/timelines.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { environment } from 'src/environments/environment.variables';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopLineComponent,
    DarkModeTogglerComponent,
    HeaderComponent,
    ContactsComponent,
    CoverComponent,
    ResumeComponent,
    SkillsComponent,
    TimelinesComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpClientModule,
    StoreModule.forRoot({ cms: cmsReducer }),
    EffectsModule.forRoot([CmsEffects]),
    FontAwesomeModule,
    ScullyLibModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: environment.graphQLUrl,
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
