import { Component, OnInit } from '@angular/core';
import { Libro } from '../interfaces/Libro';

@Component({
    selector: 'app-expositor-libros',
    templateUrl: './expositor-libros.component.html',
    styleUrls: ['./expositor-libros.component.scss']
})
export class ExpositorLibrosComponent implements OnInit {
    modoElegido: string = 'Consulta';
    librosOfrecidos:Libro[];
    constructor() { }

    ngOnInit(): void {
        const libro1: Libro = { titulo: 'Cien años de soledad', autor: 'Gabriel Garcia Marquez', precio: 30, stock: 4 };
        const libro2: Libro = { titulo: 'El relato de un naufrago', autor: 'Gabriel Garcia Marquez', precio: 20, stock: 7 };
        this.librosOfrecidos = [libro1];
        this.librosOfrecidos.push(libro2);
        this.librosOfrecidos.push({ titulo: 'El lazarillo de tormes', precio: 5, stock: 10 });
    }

    cambiarModo(opcion: string) {
        this.modoElegido = opcion;
    }

}
