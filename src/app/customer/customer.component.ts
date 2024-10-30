import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { BASE_URL } from '../app.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent {
  public customers: Customer[] = [];

  constructor(http: HttpClient, @Inject(BASE_URL) private baseUrl: string) {
    http.get(this.baseUrl + 'api/Customers').subscribe(
      (result) => {
        this.customers = result as Customer[];
      },
      (err) => console.error(err)
    );
  }
}

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
}
