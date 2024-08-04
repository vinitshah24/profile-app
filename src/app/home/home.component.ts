import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConfigService } from '../services/config.service';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  homeConf: {
    shapes: {
      shape1: string,
      shape2: string,
      shape3: string,
      shape4: string,
      shape5: string,
      shape6: string
    };
    username: string,
    description: string,
    image: string,
    socialLinks: {
      facebook: string,
      twitter: string
      linkedin: string
    }
  }


  constructor(private config: ConfigService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.homeConf = config.getHomeConf();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      function parallaxMouse() {
        if ($('#parallax').length) {
          var scene = document.getElementById('parallax');
          if (scene) {
            var parallax = new Parallax(scene);
          }
        };
      };
      parallaxMouse();
    }
  }

}
