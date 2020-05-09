import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { MaretoPageRoutingModule } from "./mareto-routing.module";
import { MaretoPage } from "./mareto.page";
import { ComponetsModule } from "../components/componets.module";
import { MaretoComponent } from "../components/mareto/mareto.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaretoPageRoutingModule,
    // ComponetsModule,
    // MaretoComponent,
  ],
  declarations: [MaretoPage],
})
export class MaretoPageModule {}
