import { Inject, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DevToolsExtension,
  NgRedux,
  NgReduxModule,
} from "@angular-redux/store";
import {
  BASE_REDUCER,
  DEV_TOOL_ACTIONS,
  REDUCERS,
  ROOT_SAGAS,
  SAGA_MIDDLEWARE,
  STORE,
} from "./store.injection-tokens";
import { AppState } from "./store.interface";
import {
  ActionCreator,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Middleware,
  Reducer,
  ReducersMapObject,
  Store,
} from "redux";
import createSagaMiddleware, { Saga, SagaMiddleware } from "redux-saga";
import { createLogger } from "redux-logger";

const mergeObjects = <T>(objs: Partial<T>[]): Partial<T> =>
  objs.reduce(
    (acc, obj) => ({
      ...acc,
      ...obj,
    }),
    {}
  );

@NgModule({
  declarations: [],
  imports: [CommonModule, NgReduxModule],
  providers: [
    {
      provide: SAGA_MIDDLEWARE,
      useFactory: () =>
        createSagaMiddleware({
          onError(error, _errorInfo): void {
            console.log(error);
          },
        }),
    },
    {
      provide: BASE_REDUCER,
      deps: [REDUCERS],
      useFactory: (reducers: ReducersMapObject<AppState>[]) =>
        combineReducers(mergeObjects(reducers)),
    },
    {
      provide: STORE,
      deps: [
        SAGA_MIDDLEWARE,
        DEV_TOOL_ACTIONS,
        DevToolsExtension,
        BASE_REDUCER,
      ],
      useFactory: (
        sagaMiddleware: SagaMiddleware,
        devToolActions: { [name: string]: ActionCreator<any> }[],
        devTools: DevToolsExtension,
        baseReducer: Reducer<AppState>
        // isProduction: boolean
      ) => {
        let composeFn = compose;
        let middlewares: Array<Middleware> = [sagaMiddleware];

        // if (!isProduction) {
        middlewares = [...middlewares, createLogger()];
        //}

        const actionCreators = devToolActions.reduce(
          (acc, obj) => ({ ...acc, ...obj }),
          {}
        );

        if (devTools.isEnabled()) {
          // if (devTools.isEnabled() && !isProduction) {
          // we can't use the enchancer directly as we need to use the compose version so middlewares still work
          // this function still sets up some useful angular<->redux integration so we still call it
          devTools.enhancer();

          composeFn = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            actionCreators,
          });
          // composeFn = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({
          //   actionCreators,
          // });
        }

        const store: Store<any> = createStore(
          baseReducer,
          composeFn(applyMiddleware(...middlewares))
        );

        store.subscribe(() => console.log(store.getState()));

        return store;
      },
    },
  ],
})
export class StoreModule {
  constructor(
    ngRedux: NgRedux<AppState>,
    @Inject(STORE) store: Store,
    @Inject(SAGA_MIDDLEWARE) sagaMiddleware: SagaMiddleware,
    @Inject(ROOT_SAGAS) rootSagas: Saga[][]
  ) {
    ngRedux.provideStore(store);

    rootSagas.forEach((sagas) => {
      sagas.forEach((saga) => sagaMiddleware.run(saga));
    });
  }
}
