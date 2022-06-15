import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/Libro';
import { LibroService } from '../servicios/libro.service';

@Component({
    selector: 'app-expositor-libros',
    templateUrl: './expositor-libros.component.html',
    styleUrls: ['./expositor-libros.component.scss']
})
export class ExpositorLibrosComponent implements OnInit {
    modoElegido: string = 'Consulta';
    librosOfrecidos: Libro[];
    libroEsp: Libro = { titulo: 'Cien años de soledad', autor: 'Gabriel Garcia Marquez', precio: 30, stock: 4 };








    //
    librosComprados: Libro[] = [];
    precioTotal: number = 0;


    constructor(
        private libroService:LibroService
    ) { }

    ngOnInit(): void {
        console.log(this.libroService.variable1)
        this.libroService.variable1 = 'hola don pepito'


    

        this.libroService.recuperaLibrosOBS().subscribe(librosBBDD => {
            //ESTE BLOQUE DE CODIGO SE EJEUCTA CUANDO RECIBO LA INFORMACIÓN
            this.librosOfrecidos = librosBBDD;
        });



    }



    /**
 * Función que se lanza cuando un libro notifica al componente que se
 * ha comprado y tenemos que añadirlo a nuestro carrito
 * @param libro Libro que ha sido comprado 
 */
    compraLibro(libro: Libro) {
        this.librosComprados.push(libro);
        this.precioTotal += libro.precio;
    }











    cambiarModo(opcion: string) {
        this.modoElegido = opcion;
    }





}
