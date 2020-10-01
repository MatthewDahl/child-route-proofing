import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavComponent } from './dashboard-nav.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardNavComponent],
  imports: [CommonModule, MatTabsModule, RouterModule],
  exports: [DashboardNavComponent],
})
export class DashboardNavModule {}
