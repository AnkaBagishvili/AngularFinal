// import { Component, OnInit } from '@angular/core';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatButtonModule } from '@angular/material/button';
// import { UserInfoService } from '../services/user-info.service';

// @Component({
//   selector: 'app-header-menu',
//   templateUrl: './header-menu.component.html',
//   styleUrl: './header-menu.component.scss',
//   standalone: true,
//   imports: [MatMenuModule, MatButtonModule],
// })
// export class HeaderMenuComponent implements OnInit {
//   userName!: string;
//   constructor(private userInfoService: UserService) {}

//   ngOnInit(): void {
//     this.userInfoService.getUserName().subscribe((name) => {
//       this.userName = name;
//     });
//   }
// }

// header-menu.component.ts
import { Component, OnInit, Inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { UserInfoService } from '../services/user-info.service'; // Ensure the correct path

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'], // Corrected to 'styleUrls'
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
