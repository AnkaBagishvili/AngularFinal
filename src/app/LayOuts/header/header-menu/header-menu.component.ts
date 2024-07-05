import { Component, OnInit, Inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { UserInfoService } from '../../../helpers/services/user-info.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  standalone: true,
  imports: [MatMenuModule, MatButtonModule],
})
export class HeaderMenuComponent implements OnInit {
  userName!: string;

  constructor(
    @Inject(UserInfoService) private userInfoService: UserInfoService
  ) {}

  ngOnInit(): void {
    this.userInfoService.getUserName().subscribe((name: string) => {
      this.userName = name;
    });
  }
}
