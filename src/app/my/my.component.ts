import { Component } from '@angular/core';

@Component({
  selector: 'app-my',
  template: '<h1>{{ title }}</h1>'
})
export class MyComponent {
  title = 'My Title';
}
