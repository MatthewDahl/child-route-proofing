import { Component, OnInit } from '@angular/core';
import { FormStepComponent } from '../../../../core/types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements FormStepComponent, OnInit {
  readonly index = 1;
  readonly next = 'allocations';
  readonly prev = './';
  readonly last = false;

  constructor() {}

  ngOnInit(): void {}
}
