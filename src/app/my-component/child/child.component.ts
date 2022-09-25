import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"],
})
export class ChildComponent implements OnChanges {
  @Input() message: string = "default";
  changeObject: SimpleChanges = {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.changeObject = changes;
  }
}
