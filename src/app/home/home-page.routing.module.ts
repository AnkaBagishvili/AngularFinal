import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../LayOuts/about/about.component';
import { HomeComponent } from './home.component';
import { BodyComponent } from '../LayOuts/body/body.component';
import { CartComponent } from '../Shop/cart/cart.component';
import { WishListComponent } from '../Shop/wish-list/wish-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: BodyComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'wishlist',
        component: WishListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), RouterLink],
  exports: [RouterModule],
})
export class HomePageRouterModule {}
