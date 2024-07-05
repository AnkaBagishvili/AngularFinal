import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './LayOuts/header/header.component';
import { StoreModule } from '@ngrx/store';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './helpers/services/auth.service';
// import { AuthGuard } from './helpers/services/guards.guard';
import { PageNotFoundComponent } from './LayOuts/page-not-found/page-not-found.component';
import { SingInComponent } from './authentification/sing-in/sing-in.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  providers: [AuthService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    SignUpComponent,
    SingInComponent,
  ],
})
export class AppModule {}
