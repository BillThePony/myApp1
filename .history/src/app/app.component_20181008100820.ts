import { Component } from "@angular/core";
import { getMaxListeners } from "cluster";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "myApp";

  yourEmail = "Z.H@gmail.com";
}
