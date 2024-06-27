import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [HeaderMenuComponent],
})
export class HeaderComponent {
  searchInput = new FormControl('');
}
