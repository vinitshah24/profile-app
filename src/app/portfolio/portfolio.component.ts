import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { ConfigService } from '../services/config.service';
import { CommonModule } from '@angular/common';

declare const $: any;  // Declare $ to avoid TypeScript errors

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  portfolioConf: {
    heading: string,
    description: string,
    projectLink: string,
    projects: { title: string, image: string, link: string }[]
  }
  constructor(private config: ConfigService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.portfolioConf = config.getPortfolioConf();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      $(document).ready(() => {
        $('.image-popup').magnificPopup({
          type: 'image',
          gallery: { enabled: true }
        });
      });
    }
  }

}
