import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skillsConf: {
    title: string,
    description: string,
    components: { title: string, link: string, icon: string, details: string }[]
  }


  constructor(private config: ConfigService) {
    this.skillsConf = config.getSkillsConf();
  }

}
