import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion-libro',
  templateUrl: './creacion-libro.component.html',
  styleUrls: ['./creacion-libro.component.scss']
})
export class CreacionLibroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      console.log('llego al componente')
  }

}
