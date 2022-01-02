import { InjectionToken } from "@angular/core";
import { SagaMiddleware, Saga } from "redux-saga";
import { ActionCreator, Reducer, ReducersMapObject, Store } from "redux";
import { Observable } from "rxjs";
import { AppState } from "./store.interface";
import { Persistor } from "redux-persist";

export const SAGA_MIDDLEWARE = new InjectionToken<SagaMiddleware>(
  "app.saga-middleware"
);

export const ROOT_SAGAS = new InjectionToken<Saga[]>("app.root-sagas");

export const DEV_TOOL_ACTIONS = new InjectionToken<{
  [name: string]: ActionCreator<any>;
}>("app.dev-tools-actions");

// reducers provided by each module, multi injected
export const REDUCERS = new InjectionToken<
  Partial<ReducersMapObject<AppState>>
>("app.reducers");

export const BASE_REDUCER = new InjectionToken<Reducer<AppState>>(
  "app.base-reducer"
);

export const STORE = new InjectionToken<Store<AppState>>("app.store");

export const PERSISTOR = new InjectionToken<Persistor>("app.persistor");

export const PERSISTOR_BOOTSTRAPPED = new InjectionToken<Observable<boolean>>(
  "app.persistor-bootstrapped"
);
