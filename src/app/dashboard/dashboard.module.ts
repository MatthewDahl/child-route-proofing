import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardNavModule } from '../shared/dashboard-nav/dashboard-nav.module';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [DashboardComponent, OverviewComponent],
  imports: [CommonModule, DashboardRoutingModule, DashboardNavModule],
})
export class DashboardModule {}
