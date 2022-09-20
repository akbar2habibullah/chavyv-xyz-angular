import { createReducer, on } from '@ngrx/store';
import * as CmsActions from './cms.actions';

export const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const cmsReducer = createReducer(
  initialState,
  on(CmsActions.loadData, (state) => ({
    ...state,
    loading: true,
  })),
  on(CmsActions.loadSuccess, (state, { payload }) => ({
    ...state,
    data: payload,
    loading: false,
  })),
  on(CmsActions.loadError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
