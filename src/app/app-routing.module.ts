import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  /* istanbul ignore next */
  constructor(private router: Router) {
    this.router.initialNavigation();
  }
}
