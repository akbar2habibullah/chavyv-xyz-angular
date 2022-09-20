import { createSelector } from '@ngrx/store';

export const selectCms = (state: any) => state.cms;

export const selectCmsData = createSelector(
  selectCms,
  (state: any) => state.data
);

export const selectCmsLoading = createSelector(
  selectCms,
  (state: any) => state.loading
);

export const selectCmsError = createSelector(
  selectCms,
  (state: any) => state.error
);

export const selectDataResume = createSelector(
  selectCmsData,
  (state: any) => state.resume
);

export const selectDataPortos = createSelector(
  selectCmsData,
  (state: any) => state.portos
);

export const selectDataSkills = createSelector(
  selectCmsData,
  (state: any) => state.skills
);

export const selectDataTimelines = createSelector(
  selectCmsData,
  (state: any) => state.timelines
);
