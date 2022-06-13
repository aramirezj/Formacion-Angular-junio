import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    iniciarSesion() {
        //Setea cookie
        localStorage.setItem('token', '1');
    }
    borrarSesion() {
        //Borra cookie
        localStorage.removeItem('token');
    }

}
