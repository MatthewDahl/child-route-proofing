import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add.component';
import { AllocationsComponent } from './allocations/allocations.component';
import { DetailsComponent } from './details/details.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  {
    path: '',
    component: AddComponent,
    children: [
      {
        path: 'select',
        component: SelectComponent,
        data: {
          index: 0,
          next: 'details',
          prev: '/dashboard/beneficiaries',
          last: false,
        },
      },
      {
        path: 'details',
        component: DetailsComponent,
        data: { index: 1, next: 'allocations', prev: 'select', last: false },
      },
      {
        path: 'allocations',
        component: AllocationsComponent,
        data: { index: 2, next: 'submit', prev: 'details', last: true },
      },
      { path: '', redirectTo: 'select', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRoutingModule {}
