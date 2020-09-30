import { Component, OnInit } from '@angular/core';
import { FormStepComponent } from '../../../../core/types';

@Component({
  selector: 'app-allocations',
  templateUrl: './allocations.component.html',
  styleUrls: ['./allocations.component.css'],
})
export class AllocationsComponent implements FormStepComponent, OnInit {
  readonly index = 1;
  readonly next = 'submit';
  readonly prev = 'details';
  readonly last = true;

  constructor() {}

  ngOnInit(): void {}
}
