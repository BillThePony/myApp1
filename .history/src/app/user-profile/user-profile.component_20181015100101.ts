import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  User = {
    name: "Zak",
    firstName: "Hamichi",
    age: 25,
    quote: "OUI",
    photo: "zakaria.jpg"
  };

  constructor() {}

  ngOnInit() {}

  hideAge() {
    this.User.age = null;
  }
}
