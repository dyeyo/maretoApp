import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-mareto",
  templateUrl: "./mareto.component.html",
  styleUrls: ["./mareto.component.scss"],
})
export class MaretoComponent implements OnInit {
  maretoUrl: SafeResourceUrl;
  state: string;
  constructor(private domSanitizer: DomSanitizer, private storage: Storage) {}

  ngOnInit() {
    this.state = localStorage.getItem("state");
    // this.storage.get("state").then((val) => {
    //   console.log("Your age is", val);
    // });
    this.maretoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      "https://www.maretoplaza.com/mobile"
    );
  }
}
