import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    if (!isFormStepComponent(step)) {
      return;
    }

    console.log(step);

    this.currentStep = step;
  }

  handleAction(action: 'next' | 'prev' | 'submit'): void {
    if (action === 'submit') {
      // TODO: Handle submit data
      if (typeof window !== 'undefined') {
        window.alert('!!!FORM SUBMITTED!!!');
      }
      return;
    }

    this.router.navigate([this.currentStep[action]], {
      relativeTo: this.route,
    });
  }
}
