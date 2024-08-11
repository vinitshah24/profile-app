import { Component, Inject, PLATFORM_ID, OnInit, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ConfigService } from '../services/config.service';
import { CommonModule } from '@angular/common';

declare const $: any;  // Declare $ to avoid TypeScript errors

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  aboutConf: {
    heading: string,
    description: string,
    title: string,
    info: string,
    email: string,
    phone: string,
    skills: { name: string, percentage: number }[]
  }

  constructor(private config: ConfigService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.aboutConf = config.getAboutConf();
  }

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)) {

    //   $(document).ready(() => {

    //     if ($('.progress-line').length) {
    //       $('.progress-line').appear(() => {
    //         var el = $(this);
    //         var percent = el.data('width');
    //         $(el).css('width', percent + '%');
    //       }, { accY: 0 });
    //     }

    //     $('.counter').counterUp({
    //       delay: 10,
    //       time: 1000
    //     });
    //   });
    // }
  }
}