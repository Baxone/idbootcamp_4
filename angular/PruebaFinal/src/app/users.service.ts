import { Injectable } from '@angular/core';
import { lastValueFrom, Observable, Subject } from 'rxjs';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private login$: Subject<boolean>;
  private users$: Subject<User[]>;

  private users: User[];

  constructor() {
    this.login$ = new Subject();
    this.users$ = new Subject();
    this.users = [];
  }

  loginCorrecto() {
    this.login$.next(true);
  }

  agregarUser(user: User) {
    this.users.push(user);
    this.users$.next(this.users);
  }

  getLogin$(): Observable<boolean> {
    return this.login$.asObservable();
  }

  getUsers$(): Observable<User[]> {
    return this.users$.asObservable();
  }

}
