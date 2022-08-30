import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoggerService1 {
  prefix: string = "root LoggerService1";

  constructor() {}

  log(message: string) {
    console.log(`${this.prefix} - ${message}`);
  }
}

export class LoggerService {
  prefix: string = "root LoggerService";

  constructor() {}

  log(message: string) {
    console.log(`${this.prefix} - ${message}`);
  }
}

export class errorService {
  prefix: string = "Error root";

  log(error: string) {
    console.error(this.prefix, error);
  }
}
