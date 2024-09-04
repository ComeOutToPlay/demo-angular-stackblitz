import { Component } from '@angular/core';
import { MiscService } from '../../services/misc.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private miscService: MiscService) {}

  getWeatherData() {
    this.miscService.getWeather().subscribe({
      next: (data: object) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
}
