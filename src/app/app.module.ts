import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './helpers/services/auth.service';
import { PageNotFoundComponent } from './LayOuts/page-not-found/page-not-found.component';
import { SingInComponent } from './authentification/sing-in/sing-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  providers: [AuthService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SignUpComponent,
    SingInComponent,
  ],
})
export class AppModule {}
