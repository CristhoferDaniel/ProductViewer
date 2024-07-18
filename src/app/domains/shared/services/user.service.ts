import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  constructor() { }

  getAll(limit: number){
    return this.http.get<User[]>(
      `https://api.escuelajs.co/api/v1/users?limit=${limit}`
    );
  }
  CheckEmail(email: string){
    return this.http.post('https://api.escuelajs.co/api/v1/users/is-available', {email});
  }
}
