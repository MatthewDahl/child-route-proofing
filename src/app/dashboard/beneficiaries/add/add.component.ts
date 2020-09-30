import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationEnd, ChildActivationStart, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { buffer, filter, tap, map, takeUntil } from 'rxjs/operators';
import { StepContext, isStepContext } from '@core/types';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  currentStep: StepContext;

  private ngUnsubscribe$ = new Subject();

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

    this.router.events
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
