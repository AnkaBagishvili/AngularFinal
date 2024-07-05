import { Component, inject } from '@angular/core';
import { AuthService } from '../../helpers/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Auth } from '../../helpers/inferfaces/auth.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss'],
})
export class SingInComponent {
  private _authService = inject(AuthService);
  private _router = inject(Router);

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberUser: new FormControl(false),
  });

  onSignIn() {
    console.log('Sign In button clicked');
    console.log('Form Valid:', this.authForm.valid);
    console.log('Form Values:', this.authForm.value);
    console.log('Form Errors:', this.authForm.errors);

    if (this.authForm.valid) {
      const { email, password, rememberUser } = this.authForm.value as Auth;
      this._authService['logIn']({ email, password, rememberUser }).subscribe(
        () => {
          console.log('Login successful');
          this._router.navigate(['/home']);
        },
        (error: HttpErrorResponse) => {
          console.error('Login failed', error.message);
        }
      );
    } else {
      console.warn('Form is invalid');
    }
  }
}
