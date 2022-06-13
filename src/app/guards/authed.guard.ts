import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class AuthedGuard implements CanActivate {
    constructor(
        private router:Router
    ) { }

    canActivate(): boolean {
        if(!localStorage.getItem('token')){
            return true;
        }else{
            this.router.navigate(['expositorLibros']);
            return false;
        }
    }
}
