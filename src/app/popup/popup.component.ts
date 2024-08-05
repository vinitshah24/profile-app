import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

  @ViewChild('modal') modal?: ElementRef;
  title!: string;
  description!: string;

  constructor() { }

  openPopup(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.modal?.nativeElement.modal('show');

  }

  closePopup() {
    this.modal?.nativeElement.modal('hide');
  }
}

