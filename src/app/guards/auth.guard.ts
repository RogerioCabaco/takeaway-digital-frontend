import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
    apiUrl = environment.apiUrl;
    currentUrl: string;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
        // Validação de api_token expirado
        if (this.authService.isTokenValid()) {
            // Validação de permissões de página
            // const pagePermission = route.data["pagePermission"];
            const role = route.data.role as string;
            if (role) {
                //const isAllowed = this.authService.matchRole(role);
                const isAllowed = false;
                if (isAllowed) {
                    return true;
                } else {
                    this.router.navigate(['./login']);
                    return false;
                }
            } else {
                // Caso não precise de permissão de página
                return true;
            }
        }
        else {
            this.router.navigate(['./login']);
        }
    }
}
