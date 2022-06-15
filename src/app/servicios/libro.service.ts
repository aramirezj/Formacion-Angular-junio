import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/Libro';

@Injectable()
export class LibroService {
    variable1: string = 'hola';
    variable2: string;
    librosOfrecidos: Libro[];
    constructor() {
        const libro1: Libro = { titulo: 'Cien años de soledad', autor: 'Gabriel Garcia Marquez', precio: 30, stock: 4 };
        const libro2: Libro = { titulo: 'El relato de un naufrago', autor: 'Gabriel Garcia Marquez', precio: 20, stock: 7 };
        this.librosOfrecidos = [libro1];
        this.librosOfrecidos.push(libro2);
        this.librosOfrecidos.push({ titulo: 'El lazarillo de tormes', precio: 5, stock: 10 });
    }
    /**
    * Función que ataca a base de datos y recupera un listado de libros
    * @returns Listado de libros
    */
    recuperaLibrosOBS(): Observable<Libro[]> {
        return new Observable(observer => {
            //HE LLAMADO A MI BBDD Y ha tardado 3 segundos
            setTimeout(() => {
                let librosBBDD = this.librosOfrecidos;
                observer.next(librosBBDD);
                observer.complete();
            }, 3000)
        })
    }

}
