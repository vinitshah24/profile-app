import { Component, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, NgForm, FormControl } from "@angular/forms";
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: "app-sidebar-subscribe",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlertComponent
  ],
  templateUrl: "./sidebar-subscribe.component.html",
  styleUrl: "./sidebar-subscribe.component.css"
})
export class SidebarSubscribeComponent {

  subscriptionForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  alertMessage!: string;
  alertType!: string;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  subscribe(form: NgForm) {
    console.log("Subscribed email")
    this.alertMessage = "You have successfully subscribed to the blogs!";
    this.alertType = "info";
  }

  onHandleAlert() {
    this.alertMessage = "";
    this.alertType = "";
  }
}
