import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DefaultValueAccessor),
      multi: true,
    },
  ],
})
export class ChildComponent {
  @Input()
  fatherMessage: string | undefined;

  @Output()
  messageEmitter = new EventEmitter<string>();

  childMessage: string = 'Valor Inicial';

  constructor() {}

  sendMessageToFather() {
    this.messageEmitter.emit(this.childMessage);
  }

  hiClick() {
    this.messageEmitter.emit('From Button Hi');
  }
}
