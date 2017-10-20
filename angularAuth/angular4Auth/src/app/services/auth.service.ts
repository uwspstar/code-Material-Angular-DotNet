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
        /*
        const jwtHelper = new JwtHelper();
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }

        const expirationDate = jwtHelper.getTokenExpirationDate(token);
        const isExpired = jwtHelper.isTokenExpired(token);

        console.log('token = ' + token);
        console.log('expirationDate = ' + token);
        console.log('isExpired = ' + token);
        return !isExpired;
        */
    }
}
