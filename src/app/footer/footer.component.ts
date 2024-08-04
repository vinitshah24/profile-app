import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  footerConf: {
    logo: string,
    description: string,
    socialLinks: {
      facebook: string,
      twitter: string,
      linkedin: string
    }
  }

  constructor(private config: ConfigService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.footerConf = config.getFooterConf();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      // Show or hide the sticky footer button
      $(window).on('scroll', function (event) {
        const scrollTop = $(this).scrollTop();
        if (scrollTop && scrollTop > 600) {
          $('.back-to-top').fadeIn(200);
        } else {
          $('.back-to-top').fadeOut(200);
        }
      });

      //Animate the scroll to top
      $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
          scrollTop: 0,
        }, 1500);
      });
    }
  }

}
