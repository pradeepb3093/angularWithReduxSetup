import { Component, OnInit, Optional, Self, SkipSelf } from "@angular/core";
import {
  errorService,
  LoggerService,
  LoggerService1,
} from "../common/logger.service";

@Component({
  selector: "app-resolution-modifier-example",
  templateUrl: "./resolution-modifier-example.component.html",
  styleUrls: ["./resolution-modifier-example.component.scss"],
  providers: [LoggerService, LoggerService1],
})
export class ResolutionModifierExampleComponent implements OnInit {
  constructor(
    @Optional() private errorService: errorService,
    @Optional() private LoggerService: LoggerService,
    @Optional() @Self() private loggerService1: LoggerService1,
    @SkipSelf() private parentLoggerService: LoggerService1
  ) {
    if (!this.errorService)
      console.log(
        "errorService not provided its not breaking the app cause Optional tag is passed"
      );

    if (this.errorService) {
      this.errorService.log("error service initiated");
    }

    if (this.LoggerService) {
      this.LoggerService.prefix = "component LoggerService";
      this.LoggerService.log("constructor init");
    }
    if (this.loggerService1) {
      this.loggerService1.prefix = "component LoggerService1";
      this.loggerService1.log("constructor init");
    }

    if (this.parentLoggerService) {
      this.parentLoggerService.log("constructor init");
    }
  }

  ngOnInit(): void {}
}
