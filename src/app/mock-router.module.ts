import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Define mock components for testing purposes
@Component({
  selector: 'app-mock-component',
  template: '<p>Mock Component</p>'
})
export class MockComponent {}

// Define mock routes for testing purposes
const routes: Routes = [
  { path: 'mock', component: MockComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  // Set up routes for the root module
  ],
  declarations: [MockComponent],
  exports: [RouterModule]
})
export class MockRouterModule {}
