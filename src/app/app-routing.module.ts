import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/services/guards.guard';
import { PageNotFoundComponent } from './LayOuts/page-not-found/page-not-found.component';
import { SingInComponent } from './authentification/sing-in/sing-in.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'SignIn',
  //   pathMatch: 'full',
  // },
  {
    path: 'SignUp',
    component: SingInComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'main',
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
