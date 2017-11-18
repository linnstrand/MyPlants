import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Welcome to Plants!</h1>
      <app-plants></app-plants>
       `,
  styles: []
})
export class AppComponent {
  title = 'app';
}