import { createAction } from "typesafe-redux-helpers";
import { homeData } from "../home.interface";

export const HOME_FETCH_DATA = {
  TRIGGER: createAction("[HOME_FETCH_DATA TRIGGER] trigger home data action"),
  STARTED: createAction("[HOME_FETCH_DATA STARTED] set isFetching to true"),
  COMPLETED: createAction(
    "[HOME_FETCH_DATA COMPLETED] save home data in store",
    (payload: homeData) => payload
  ),
  RESET: createAction("[HOME_FETCH_DATA RESET] reset data to intial state"),
};
