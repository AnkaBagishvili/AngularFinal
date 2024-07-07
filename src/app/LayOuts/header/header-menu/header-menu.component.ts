import { Component, OnInit, Inject, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { UserInfoService } from '../../../helpers/services/user-info.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, RouterLink],
})
export class HeaderMenuComponent implements OnInit {
  userName: string = '';

  constructor(private userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this.userInfoService.getUserName().subscribe((name: string) => {
      this.userName = name;
    });
  }

  logout() {}

  // private _router = inject(Router);
  // goToWishList() {
  //   this._router.navigate(['shop/wishlist']);
  // }
}
