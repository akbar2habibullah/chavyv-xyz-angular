import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, ApolloBase, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.variables';

@Injectable({
  providedIn: 'root',
})
export class CmsService {
  private apollo: ApolloBase;

  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider;
  }

  getData(): Observable<ApolloQueryResult<any>> {
    return this.apollo.query({
      query: gql`
        ${environment.cmsSchema}
      `,
    });
  }
}
