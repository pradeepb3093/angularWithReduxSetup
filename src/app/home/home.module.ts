import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Saga } from "@redux-saga/types";
import {
  DEV_TOOL_ACTIONS,
  REDUCERS,
  ROOT_SAGAS,
} from "../store/store.injection-tokens";
import { HomeComponent } from "./home.component";
import { HOME_FETCH_DATA } from "./redux-operation/home.actions";
import { homeReducer } from "./redux-operation/home.reducer";
import { HomeSagas } from "./redux-operation/home.sagas";

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [
    HomeSagas,
    {
      provide: ROOT_SAGAS,
      multi: true,
      deps: [HomeSagas],
      useFactory: (sagas: HomeSagas): Saga[] => [
        sagas.listenForFetchHomeDataTrigger,
      ],
    },
    {
      provide: REDUCERS,
      multi: true,
      useValue: {
        home: homeReducer,
      },
    },
    {
      provide: DEV_TOOL_ACTIONS,
      multi: true,
      useValue: {
        "Fetch all data for home": HOME_FETCH_DATA.TRIGGER,
      },
    },
  ],
})
export class HomeModule {}
