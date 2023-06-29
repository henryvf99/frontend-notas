import { Component, OnInit } from '@angular/core';
import {NotaService} from '../../services/nota/nota.service';
import { MatTableDataSource } from '@angular/material/table';
import {Nota} from '../notas/notaModel';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {LoginService} from '../../services/login/login.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
})
export class NotasComponent implements OnInit {
  user: any = null;

  nombreU: string = '';
  apellidoU: string = '';

  displayedColumns: string[] = ['titulo', 'descripcion', 'acciones'];
  dataSource: MatTableDataSource<Nota>;

  datos: Nota = new Nota();

  constructor(
    private notaService: NotaService,
    private router: Router,
    public login: LoginService
  ) {}

  ngOnInit(): void {
    this.getNotas();
    this.user = this.login.getUser();
    //console.log(this.user);
    this.nombreU = this.user.nombre;
    this.apellidoU = this.user.apellido;
  }

  agregarNota() {
    this.datos.idusuario = this.user.id;
    this.notaService.agregarNota(this.datos).subscribe(
      (data) => {
        console.log(data);
        window.location.reload();
      },
      (error) => console.log(error)
    );
  }

  getNotas() {
    this.notaService.listarNotas().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data['body']);
    });
  }

  delete(id: number) {
    Swal.fire({
      title: '¿Estás seguro qué deseas eliminar la nota?',
      text: 'La acción no se puede revertir',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.notaService.eliminarNota(id).subscribe(() => {
          this.getNotas();
        });
        Swal.fire('Eliminado!', 'Eliminaste la nota.', 'success').then(
          (okay) => {
            if (okay) {
              window.location.reload();
            }
          }
        );
      }
    });
  }
}
