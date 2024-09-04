import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  controlButton: string = 'Start';
  counterValue: number = 0;
  isRunning: boolean = false;

  onStartStop() {
    if (!this.isRunning) {
      // Starting
      this.controlButton = 'Stop';
      this.isRunning = true;
      this.task();
    } else {
      // Stopping
      this.controlButton = 'Start';
      this.isRunning = false;
    }
  }

  onReset() {
    this.isRunning = false;
    this.controlButton = 'Start';
    this.counterValue = 0;
  }

  task() {
    setInterval(() => {
      if (this.isRunning) {
        this.counterValue += 1;
      }
    }, 1000);
  }
}
