import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, DashboardComponent],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {}
