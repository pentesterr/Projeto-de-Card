import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Aula sobre Service</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sobre-services';
}
