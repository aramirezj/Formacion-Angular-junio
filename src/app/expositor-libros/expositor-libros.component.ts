import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-expositor-libros',
    templateUrl: './expositor-libros.component.html',
    styleUrls: ['./expositor-libros.component.scss']
})
export class ExpositorLibrosComponent implements OnInit {
    modoElegido: string = 'Consulta';
    constructor() { }

    ngOnInit(): void {
    }

    cambiarModo(opcion: string) {
        this.modoElegido = opcion;
    }

}
