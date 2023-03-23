import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormExamplesComponent } from './components/pages/form-examples/form-examples.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'form-examples',
    component: FormExamplesComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
