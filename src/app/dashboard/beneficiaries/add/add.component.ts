import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
// ! Currently stackblitz does not support typescript path aliasing
// ! https://github.com/stackblitz/core/issues/220
import { FormStepComponent, isFormStepComponent } from '../../../core/types';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit, OnDestroy {
  currentStep: FormStepComponent;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onActivate(step: unknown): void {
    console.log(step);

    if (!isFormStepComponent(step)) {
      return;
    }

    this.currentStep = step;
  }

  handleAction(action: 'next' | 'prev' | 'submit'): void {
    if (action === 'submit') {
      // Handle submit data
      return;
    }

    this.router.navigate([this.currentStep[action]], {
      relativeTo: this.route,
    });
  }
}
