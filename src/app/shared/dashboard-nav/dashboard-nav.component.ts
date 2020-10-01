import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css'],
})
export class DashboardNavComponent implements OnInit {
  navLinks = [
    { path: 'payments', label: 'Payments' },
    { path: 'coverage', label: 'Coverage' },
    { path: 'beneficiaries', label: 'Beneficiaries' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
