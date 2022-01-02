import { Injectable } from "@angular/core";
import { SagaIterator } from "@redux-saga/types";
import autobind from "autobind-decorator";
import { takeLatest, put, delay } from "redux-saga/effects";
import { homeData } from "../home.interface";
import { HOME_FETCH_DATA } from "./home.actions";

@Injectable()
@autobind
export class HomeSagas {
  constructor() {}

  *fetchHomeData() {
    yield put(HOME_FETCH_DATA.STARTED());

    yield delay(5000);

    const homeInfo: homeData = { name: "pradeep", age: 28 };

    yield put(HOME_FETCH_DATA.COMPLETED(homeInfo));
  }

  *listenForFetchHomeDataTrigger(): SagaIterator {
    yield takeLatest(HOME_FETCH_DATA.TRIGGER, this.fetchHomeData);
  }
}
