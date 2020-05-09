import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MaretoPage } from "./mareto.page";

const routes: Routes = [
  {
    path: "",
    component: MaretoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaretoPageRoutingModule {}
