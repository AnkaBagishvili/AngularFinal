import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor() {}

  getUserName(): Observable<string> {
    return of('');
  }
}
