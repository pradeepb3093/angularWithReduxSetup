import {
  Component,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
} from "@angular/core";

@Component({
  selector: "app-content-container",
  templateUrl: "./content-container.component.html",
  styleUrls: ["./content-container.component.scss"],
})
export class ContentContainerComponent
  implements
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  exampleInput = "";

  ngAfterContentInit(): void {
    console.log("after content init");
  }

  ngAfterContentChecked(): void {
    console.log("after content checked");
  }

  ngAfterViewChecked(): void {
    console.log("after view checked");
  }

  ngAfterViewInit(): void {
    console.log("after view init");
  }
}
