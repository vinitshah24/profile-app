import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { CollabComponent } from './collab/collab.component';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { PricingComponent } from './pricing/pricing.component';
import { BlogsComponent } from "./blogs/blogs.component";
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from "./footer/footer.component";
import { ErrorComponent } from './error/error.component'
import { PaginationComponent } from './pagination/pagination.component';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    CollabComponent,
    PortfolioComponent,
    PricingComponent,
    BlogsComponent,
    ContactComponent,
    FooterComponent,
    ErrorComponent,
    PaginationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = "profile-app";

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      $(window).on('load', function () {
        $('.preloader').delay(500).fadeOut(500);
      });
    }
  }

}
