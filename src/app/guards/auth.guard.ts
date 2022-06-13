import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

/** Clase de tipo guard utilizada para proteger rutas */
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    /**
     * Función que se ejecuta al intentar acceder a la ruta
     * @returns Si devuelve true, permite el acceso, si devuelve false, no lo permite
     */
    canActivate(): boolean {
        if (localStorage.getItem('token')) {
            return true;
        } else {
            //Si no está logado, redirigimos al usuario a la pantalla de login
            this.router.navigate(['login']);
            return false;
        }
    }
}
