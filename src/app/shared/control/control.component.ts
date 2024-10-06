import { LowerCasePipe } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [LowerCasePipe],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // it is use full when you have certain properties to be added to an element.
  // recommended by angular
  host: {
    class: 'control',
    // ,'(click)': 'onClick()',
  },
})
export class ControlComponent {
  title = input.required<string>();

  private el = inject(ElementRef);

  // adding ptoperty old way
  // @HostBinding('class') className = 'control';

  // adding event listener
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }

  @HostListener('input', ['$event']) onInput(event: Event) {
    console.log('input', event);
    console.log("el", this.el);

  }
}
