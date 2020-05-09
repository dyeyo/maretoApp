import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { SliderComponent } from "./slider/SliderComponent";
import { MaretoComponent } from "./mareto/mareto.component";

@NgModule({
  declarations: [SliderComponent, MaretoComponent],
  exports: [SliderComponent, MaretoComponent],
  imports: [CommonModule, IonicModule, RouterModule],
})
export class ComponetsModule {}
