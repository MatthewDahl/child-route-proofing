import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'payments',
        loadChildren: () =>
          import('./payments/payments.module').then((m) => m.PaymentsModule),
      },
      {
        path: 'coverage',
        loadChildren: () =>
          import('./coverage/coverage.module').then((m) => m.CoverageModule),
      },
      {
        path: 'beneficiaries',
        loadChildren: () =>
          import('./beneficiaries/beneficiaries.module').then(
            (m) => m.BeneficiariesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
