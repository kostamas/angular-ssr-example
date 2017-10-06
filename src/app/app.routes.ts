import {Routes} from '@angular/router';
import {AComponent} from './componentA/a.component';
import {BComponent} from './componentB/b.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/a', pathMatch: 'full'},
  {path: 'a', component: AComponent},
  {path: 'b', component: BComponent}
];
