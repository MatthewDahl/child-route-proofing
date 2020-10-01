import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardNavModule } from '../shared/dashboard-nav/dashboard-nav.module';
import { OverviewModule } from './overview/overview.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardNavModule,
    OverviewModule,
  ],
})
export class DashboardModule {}
