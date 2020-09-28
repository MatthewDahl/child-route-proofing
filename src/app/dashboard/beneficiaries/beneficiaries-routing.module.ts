import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficiariesComponent } from './beneficiaries.component';

const routes: Routes = [
  {
    path: '',
    component: BeneficiariesComponent,
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then((m) => m.AddModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiariesRoutingModule {}
