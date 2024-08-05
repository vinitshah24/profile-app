import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PopupComponent } from "../../popup/popup.component";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sidebar-subscribe',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PopupComponent
  ],
  templateUrl: './sidebar-subscribe.component.html',
  styleUrl: './sidebar-subscribe.component.css'
})
export class SidebarSubscribeComponent {

  subscriptionForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  subscribe(formData: NgForm) {
    console.log(formData);
    alert(`You have successfully subscribed to the blog!`)
  }
}
