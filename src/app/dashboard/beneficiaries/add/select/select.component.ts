import { Component, OnInit } from '@angular/core';
import { FormStepComponent } from '../../../../core/types';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements FormStepComponent, OnInit {
  readonly index = 0;
  readonly next = 'details';
  readonly prev = '/dashboard/beneficiaries';
  readonly last = false;

  constructor() {}

  ngOnInit(): void {}
}
