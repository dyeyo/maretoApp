import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

import { HomePageRoutingModule } from "./home-routing.module";
import { HomePage } from "./home.page";
import { ComponetsModule } from "../components/componets.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponetsModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
