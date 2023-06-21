import { Component, OnInit } from '@angular/core';

interface Nota {
  titulo: string;
  contenido: string;
}

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  notaData: Nota = {
    titulo: '',
    contenido: ''
  };
  notas: Nota[] = [];
  constructor() {
  }
  ngOnInit(): void {
  }
  agregarNota() {
    const nuevaNota: Nota = {
      titulo: this.notaData.titulo,
      contenido: this.notaData.contenido
    };

    this.notas.push(nuevaNota);
    this.notaData.titulo = '';
    this.notaData.contenido = '';
  }
}
