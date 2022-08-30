import { Directive, Optional, Self } from "@angular/core";
import { LoggerService } from "src/app/common/logger.service";

@Directive({
  selector: "[appParent]",
  providers: [LoggerService],
})
export class ParentDirective {
  constructor(@Optional() @Self() private LoggerService: LoggerService) {
    if (this.LoggerService) this.LoggerService.prefix = "parent directive";
  }
}
