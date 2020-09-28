import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { SelectComponent } from './select/select.component';
import { DetailsComponent } from './details/details.component';
import { AllocationsComponent } from './allocations/allocations.component';

@NgModule({
  declarations: [
    AddComponent,
    SelectComponent,
    DetailsComponent,
    AllocationsComponent,
  ],
  imports: [CommonModule, AddRoutingModule],
})
export class AddModule {}
