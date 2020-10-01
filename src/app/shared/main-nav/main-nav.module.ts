import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MainNavComponent } from './main-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [MainNavComponent],
})
export class MainNavModule {}
