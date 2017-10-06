import {Component} from '@angular/core';

@Component({
  selector: 'app-a',
  template: `<a [routerLink]="'/b'">redirected to A</a>`,
  styles: [
      `a {
      color: red;
      font-size: 30px;
    }`
  ]
})
export class AComponent {
}
