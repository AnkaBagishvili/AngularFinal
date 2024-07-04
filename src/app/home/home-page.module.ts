import { NgModule } from '@angular/core';
import { HeaderComponent } from '../LayOuts/header/header.component';
import { HomePageRouterModule } from './home-page.routing.module';
import { CommonModule } from '@angular/common';
import { RatingStarsComponent } from '../Shop/rating-stars/rating-stars.component';
import { WishListComponent } from '../Shop/wish-list/wish-list.component';
import { CartComponent } from '../Shop/cart/cart.component';
import { CardComponent } from '../LayOuts/card/card.component';
import { HomeComponent } from './home.component';
import { TruncatePipe } from '../helpers/pipes/truncate.pipe';
import { FooterComponent } from '../LayOuts/footer/footer.component';
import { DatePipe } from '../helpers/pipes/date.pipe';
import { AboutComponent } from '../LayOuts/about/about.component';
import { pipe } from 'rxjs';

const pipes = [TruncatePipe, DatePipe];
const layouts = [AboutComponent];
@NgModule({
  declarations: [
    HomeComponent,
    RatingStarsComponent,
    WishListComponent,
    CartComponent,
    CardComponent,
    ...pipes,
    ...layouts,
  ],
  imports: [
    CommonModule,
    HomePageRouterModule,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [],
})
export class HomePageModule {}
