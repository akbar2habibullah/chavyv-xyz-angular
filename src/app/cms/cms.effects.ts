import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CmsService } from './cms.service';
import * as CmsActions from './cms.actions';

@Injectable()
export class CmsEffects {
  loadCms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CmsActions.loadData),
      mergeMap(() =>
        this.cmsService.getData().pipe(
          map(({ data }) => {
            return CmsActions.loadSuccess({ payload: data });
          }),
          catchError((error) => {
            console.log(error);
            return of(CmsActions.loadError({ error }));
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private cmsService: CmsService) {}
}
