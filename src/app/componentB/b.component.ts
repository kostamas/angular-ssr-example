import {Component} from '@angular/core';

@Component({
  selector: 'app-b',
  template: `<a [routerLink]="'/a'">redirected to B</a>`,
  styles: [
      `a {
      color: blue;
      font-size: 30px;;
    }`
  ]
})
export class BComponent {
}
