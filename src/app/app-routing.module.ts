import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/services/guards.guard';
import { PageNotFoundComponent } from './LayOuts/page-not-found/page-not-found.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { SingInComponent } from './authentification/sing-in/sing-in.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },

  {
    path: 'sign-in',
    component: SingInComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./home/home-page.module').then((module) => module.HomePageModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
