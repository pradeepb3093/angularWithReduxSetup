import { ModuleWithProviders } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { MyComponentComponent } from "../my-component/my-component.component";
import { ResolutionModifierExampleComponent } from "../resolution-modifier-example/resolution-modifier-example.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "DI-resolution-modifier",
    component: ResolutionModifierExampleComponent,
  },
  {
    path: "component-lifeCycle",
    component: MyComponentComponent,
  },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: "enabled",
  onSameUrlNavigation: "reload",
  scrollPositionRestoration: "enabled",
  relativeLinkResolution: "legacy",
};

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(
  routes,
  routerOptions
);
