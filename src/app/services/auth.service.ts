import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginDto, UserByTokenDto } from 'dto/auth';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: "root",
})
export class AuthService {
    apiUrl = `${environment.apiUrl}/auth`;
    userByToken: UserByTokenDto;

    constructor(private http: HttpClient,
        private jwtService: JwtHelperService,
        private router: Router) { }

    // Auth

    decodeToken(token: string): UserByTokenDto {
        return this.jwtService.decodeToken(token);
    }

    getToken() {
        return localStorage.getItem('tk');
    }

    setToken(token: string) {
        localStorage.setItem('tk', token);
        this.userByToken = this.decodeToken(token);
    }

    isTokenValid(): boolean {
        const token = localStorage.getItem('tk');
        if (token) {
            this.userByToken = this.decodeToken(token);
            return !this.jwtService.isTokenExpired(token);
        }
        else {
            return false;
        }
    }

    logout() {
        localStorage.removeItem('tk');
        this.router.navigate(['./login']);
    }

    // User
    getUserEmail() {
        return this.userByToken ? this.userByToken.email : "";
    }
    getUserFullName() {
        return this.userByToken ? this.userByToken.userName : "";
    }
    getUserPhotoUrl() {
        return this.userByToken && this.userByToken.userPhoto ? this.userByToken.userPhoto : "assets/icons/default_user.png";
    }

    // HTTP requests

    login(loginDto: LoginDto) {
        return this.http.post(`${this.apiUrl}/login`, loginDto);
    }
}