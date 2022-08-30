import { NgRedux } from "@angular-redux/store";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AppState } from "../store/store.interface";
import { homeData } from "./home.interface";
import { HOME_FETCH_DATA } from "./redux-operation/home.actions";
import {
  getHomeData,
  getHomeisFetching,
} from "./redux-operation/home.selectors";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isFetching: Observable<boolean>;
  homeDetails: Observable<homeData | null>;

  constructor(private ngRedux: NgRedux<AppState>) {
    this.isFetching = this.ngRedux.select(getHomeisFetching);
    this.homeDetails = this.ngRedux.select(getHomeData);
    let a = 3;
    let b = 4;
    let obj = {
      c(d: number, e: number) {
        return e * d;
      },
      add(d: number, e: number) {
        return d + e;
      },
    };

    console.log(obj.add(a, b));
    console.log(obj.c(a, b));
  }

  ngOnInit(): void {}

  setData() {
    this.ngRedux.dispatch(HOME_FETCH_DATA.TRIGGER());
  }
}
