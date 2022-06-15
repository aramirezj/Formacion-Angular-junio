import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formularioLogin: FormGroup;

    constructor() { }

    ngOnInit(): void {

        this.formularioLogin = new FormGroup({
            email: new FormControl(null,
                 [Validators.required, Validators.email]),
            password: new FormControl()
        });


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
