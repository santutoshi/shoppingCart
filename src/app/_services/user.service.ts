import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User, IUser } from '../_model/users';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getUserJSON() : Observable<User[]> {
        return this.http.get<IUser>('../../assets/static/data/users.json').map(response => response.users as User[]);
    }
}