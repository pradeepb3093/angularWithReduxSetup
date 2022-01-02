import { createSelector, Selector } from "reselect";
import { AppState } from "src/app/store/store.interface";
import { homeData } from "../home.interface";

export const getHomeState = createSelector(
  (state: AppState) => state.home,
  (home) => home
);

export const getHomeisFetching: Selector<AppState, boolean> = createSelector(
  getHomeState,
  (state) => state.isFetching
);

export const getHomeData: Selector<AppState, homeData | null> = createSelector(
  getHomeState,
  (state) => state.data
);
