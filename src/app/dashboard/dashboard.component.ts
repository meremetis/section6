import { Component } from '@angular/core';
import { ServerStatusComponent } from './server-status/server-status.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { TrafficComponent } from './traffic/traffic.component';
import { DashboardItemComponent } from './shared/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ServerStatusComponent, SupportTicketsComponent, TrafficComponent, DashboardItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
