import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { AuthGuard } from './helpers/services/guards.guard';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
