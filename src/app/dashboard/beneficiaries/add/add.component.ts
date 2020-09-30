import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ChildActivationEnd, ChildActivationStart, NavigationEnd, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { buffer, filter, tap, map, takeUntil } from 'rxjs/operators';
// ! Currently stackblitz does not support typescript path aliasing
// ! https://github.com/stackblitz/core/issues/220
import { StepContext, isStepContext } from '../../../core/types';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit, OnDestroy {
  currentStep: StepContext;

  private ngUnsubscribe$ = new Subject();
  private router$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    // ! HACK: instantiate initial step upon entry to route
    this.currentStep = {
      index: 0,
      next: 'details',
      prev: '/dashboard/beneficiaries',
      last: false,
    };
  }

  ngOnInit(): void {
    const routeEndEvent$ = this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      tap({ complete: () => console.warn('END') })
    );

    this.router$ = this.router.events
      .pipe(
        filter(
          (e) =>
            e instanceof ChildActivationStart &&
            e.snapshot.component === this.route.component
        ),
        buffer(routeEndEvent$),
        map(([ev]) => (ev as ChildActivationEnd)?.snapshot.firstChild.data),
        takeUntil(this.ngUnsubscribe$)
      )
      .subscribe((e) => {
        if (!isStepContext(e)) {
          return;
        }

        console.log('[CHILD_ROUTE]', e);

        this.currentStep = e;
      });
  }

  ngOnDestroy(): void {
    if (this.router$) {
      this.router$.unsubscribe();
    }
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
