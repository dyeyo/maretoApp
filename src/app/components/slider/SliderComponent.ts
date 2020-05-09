import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  sliders = [
    {
      img:
        "https://www.maretoplaza.com/themes/maretotheme/img/logo_mareto_plaza.png",
      contenido: "Hola Bienvenido a Mareto",
    },
    {
      img:
        "https://www.maretoplaza.com/themes/maretotheme/img/logo_mareto_plaza.png",
      contenido: "Hola Bienvenido a Mareto",
    },
    {
      img:
        "https://www.maretoplaza.com/themes/maretotheme/img/logo_mareto_plaza.png",
      contenido: "Hola Bienvenido a Mareto",
    },
  ];
  constructor(private storage: Storage, private router: Router) {}

  ngOnInit() {}

  abrirMareto() {
    localStorage.setItem("state", "1");
    this.storage.set("slide", true);
    this.router.navigate(["mareto"]);
    /*   this.changeComponent.emit(true); */
  }
}
