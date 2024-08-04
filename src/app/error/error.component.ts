import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  errorConf: {
    description: string,
    image: string
  }

  constructor(private config: ConfigService) {
    this.errorConf = config.getErrorConf();
  }
}
