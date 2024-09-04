import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css',
})
export class FatherComponent {
  childMessage: string | undefined;
  fattherMessage: string | undefined;

  onMessageUpdate(message: string) {
    this.childMessage = message;
  }
}
