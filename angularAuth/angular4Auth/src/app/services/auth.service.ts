import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
    constructor(private http: Http) {
    }

    login(credentials) {
        return this.http.post('/api/authenticate', JSON.stringify(credentials))
            .map((response: Response) => {
                const result = response.json();
                if (result && result.token) {
                    localStorage.setItem('token', result.token);
                    return true;
                }
                return false;
            });
    }

    logout() {
        localStorage.removeItem('token');
    }

    isLoggedIn() {

        return tokenNotExpired();
    }

    get currentUser() {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }

        return new JwtHelper().decodeToken(token);
    }
}
