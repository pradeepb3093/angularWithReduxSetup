import { Directive, Host } from "@angular/core";
import { LoggerService } from "src/app/common/logger.service";

@Directive({
  selector: "[appChild]",
})
export class ChildDirective {
  constructor(@Host() private LoggerService: LoggerService) {
    this.LoggerService.log("from child directive constructor init");
  }
}
