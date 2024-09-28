import { LowerCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [LowerCasePipe],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {
  title = input.required<string>();

}
