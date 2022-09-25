import { NullTemplateVisitor } from "@angular/compiler";
import { createReducer } from "typesafe-redux-helpers";
import { homeData } from "../home.interface";
import { HOME_FETCH_DATA } from "./home.actions";

export interface homeState {
  isFetching: boolean;
  data: homeData | null;
}

export const initialHomeState: homeState = {
  isFetching: false,
  data: null,
};

export const homeReducer = createReducer(initialHomeState)
  .handleAction(HOME_FETCH_DATA.STARTED, (_state) => ({
    isFetching: true,
    data: null,
  }))
  .handleAction(HOME_FETCH_DATA.COMPLETED, (_state, action) => ({
    isFetching: false,
    data: action.payload,
  }))
  .handleAction(HOME_FETCH_DATA.RESET, () => initialHomeState);
