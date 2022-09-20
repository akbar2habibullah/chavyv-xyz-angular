import { createAction, props } from '@ngrx/store';

export const loadData = createAction('[CMS GraphQL API] Load Data');
export const loadSuccess = createAction(
  '[CMS GraphQL API] Data From CMS Loaded Success',
  props<{ payload: any }>()
);
export const loadError = createAction(
  '[CMS GraphQL API] Data Loaded Error',
  props<{ error: any }>()
);
