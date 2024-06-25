import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor() { }

  // Example method to get a greeting
  getGreeting(): string {
    return 'Hello from MyService!';
  }

  // Example method to fetch data (e.g., from an API)
  fetchData(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: 'Sample Data' });
      }, 2000);
    });
  }

  // Example method to perform a calculation
  performCalculation(a: number, b: number): number {
    return a + b;
  }
}
