import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Libro } from '../interfaces/Libro';
import { LibroService } from '../servicios/libro.service';

@Component({
  selector: 'app-creacion-libro',
  templateUrl: './creacion-libro.component.html',
  styleUrls: ['./creacion-libro.component.scss']
})
export class CreacionLibroComponent implements OnInit {
  formularioCreacion: FormGroup;
  libroCreado: Libro;
  constructor(
    private libroService:LibroService
  ) {
   }

  ngOnInit(): void {
    console.log(this.libroService.variable1);
    this.formularioCreacion = new FormGroup({
      titulo: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      autor: new FormControl(null),
      precio: new FormControl(null, Validators.required),
      stock: new FormControl(null, Validators.required)
    })
  }

  creaLibro() {
    if (this.formularioCreacion.valid) {
      this.libroCreado = {
        titulo: this.formularioCreacion.get('titulo')?.value,
        autor: this.formularioCreacion.get('autor')?.value,
        precio: this.formularioCreacion.get('precio')?.value,
        stock: this.formularioCreacion.get('stock')?.value
      }

      this.formularioCreacion.reset();
    }

  }

}
