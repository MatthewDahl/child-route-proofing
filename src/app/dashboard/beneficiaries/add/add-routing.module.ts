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
      { path: '', component: SelectComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'allocations', component: AllocationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRoutingModule {}
