import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  lastStep = false;
  currentStep: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {}

  handleAction(action: 'next' | 'prev'): void {
    if (this.lastStep) {
      // Handle submit data
      return;
    }

    const nextStep = {
      '/dashboard/beneficiaries/add/select': {
        next: 'details',
        prev: '/dashboard/beneficiaries',
      },
      '/dashboard/beneficiaries/add/details': {
        next: 'allocations',
        prev: 'select',
      },
      '/dashboard/beneficiaries/add/allocations': {
        next: null,
        prev: 'details',
      },
    };
    this.router.navigate([nextStep[this.router.url][action]], { relativeTo: this.route });
  }
}
