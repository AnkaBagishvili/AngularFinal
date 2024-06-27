import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './authentification/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CartComponent } from './cart/cart.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';

// import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    FooterComponent,
    BodyComponent,
    RatingStarsComponent,
    WishListComponent,
    CartComponent,
    CardComponent,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MaterialModule,
    // SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderMenuComponent,
    HeaderComponent,
  ],
})
export class AppModule {}
