import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  activeTab = "home"
  headerConf: {
    logo: string
  }


  constructor(private config: ConfigService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.headerConf = config.getHeaderConf();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      // Mobile Menu
      $(".navbar-toggler").on('click', function () {
        $(this).toggleClass('active');
      });

      $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
      });

      // Close navbar-collapse when clicked
      $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
      });

      // Sticky
      $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll && scroll < 10) {
          $(".navigation").removeClass("sticky");
        } else {
          $(".navigation").addClass("sticky");
        }
      });
    }
  }

  getActiveTab(tabName: string) {
    this.activeTab = tabName
  }

}
