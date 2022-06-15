import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from '../interfaces/Libro';

@Component({
    selector: 'app-libro',
    templateUrl: './libro.component.html',
    styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
    @Input() libro: Libro;
    @Input() modoElegido: string;
    @Input() titulo2: string = 'Valor predeterminado';
    /** Asignación de evento, el nombre del atributo será su nombre */
    @Output() libroComprado: EventEmitter<Libro> = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
        console.log(this.libro)
    }

    /** Función lanzada por el botón comprar, restamos stock
     * y emitimos el evento
     */
    comprar() {
        this.libro.stock--;
        this.libroComprado.emit(this.libro);
    }

}
