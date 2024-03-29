import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./routing/app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { StoreModule } from "./store/store.module";
import { MyComponentComponent } from "./my-component/my-component.component";
import { ResolutionModifierExampleComponent } from "./resolution-modifier-example/resolution-modifier-example.component";
import { ParentDirective } from "./resolution-modifier-example/directives/parent.directive";
import { ChildDirective } from "./resolution-modifier-example/directives/child.directive";
import { ChildComponent } from "./my-component/child/child.component";
import { FormsModule } from "@angular/forms";
import { ContentContainerComponent } from './my-component/content-container/content-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ResolutionModifierExampleComponent,
    ParentDirective,
    ChildDirective,
    ChildComponent,
    ContentContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
