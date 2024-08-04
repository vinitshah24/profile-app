import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../services/config.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactConf: {
    heading: string,
    description: string,
    address: string,
    phone: string,
    email: string,
    mapUrl: string
  }

  contactForm: FormGroup = new FormGroup(
    {
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", [Validators.required]),
    }
  );

  constructor(private config: ConfigService, private formBuilder: FormBuilder, private router: Router) {
    this.contactConf = config.getContactConf();
  }

  ngOnInit(): void {
  }

  sendMessage(formData: NgForm) {
    console.log(formData);
    alert("Thank you for reaching out!")
    this.router.navigate(['home'])
  }

}
