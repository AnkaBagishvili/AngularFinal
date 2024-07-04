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

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.scss',
})
export class SingInComponent {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  authForm = new FormGroup({
    email: new FormControl('emilys', [Validators.required]),
    password: new FormControl('emilyspass', [Validators.required]),
    rememberUser: new FormControl(false),
  });
  constructor() {}

  onSignIn() {
    if (this.authForm.valid) {
      const { email, password, rememberUser } = this.authForm.value as Auth;
      this._authService['logIn']({ email, password, rememberUser }).subscribe(
        () => {
          this._router.navigate(['/home']);
        }
      );
    }
  }
}
