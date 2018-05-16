import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Super new Project';

  months = ["January", "February", "March", "April"];
  isAvailable = true; // variable is set to true

  myClickFunction(event) {
    // just add the console log
    alert("Button is clicked");
    console.log(event);
    this.isAvailable = false;
  }

  changeMonths(event) {
    console.log("change month from the dropdown");
    console.log(event);
  }
}
