import { Component, DoCheck, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-my-component",
  templateUrl: "./my-component.component.html",
  styleUrls: ["./my-component.component.scss"],
})
export class MyComponentComponent implements OnInit, DoCheck, OnDestroy {
  copy = "This content is passed from parent component";
  initMsg = "";
  exampleInput = "";
  oldExampleInput = "";
  change_message = "";
  showContent = false;

  constructor() {}

  ngOnInit() {
    this.initMsg = "This message was assigned inside NgOnInit";
    this.change_message += "oninit called || ";
  }

  ngDoCheck(): void {
    if (this.exampleInput === this.oldExampleInput) {
      this.change_message += "DoCheck triggered with no changes made || ";
    } else {
      this.change_message += "DoCheck triggered on input change || ";
      this.oldExampleInput = this.exampleInput;
    }
  }

  ngOnDestroy(): void {
    console.log("component destroy hook method triggered");
  }

  updateMessage() {
    this.copy = "content is updated on click of update message";
  }
}
