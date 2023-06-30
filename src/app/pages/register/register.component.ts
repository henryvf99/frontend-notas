import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../services/register/register.service";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
  };
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  register() {
    if (this.user.username == '' || this.user.username == null) {
      alert('El nombre de usuario es requerido');
      return;
    }
    this.registerService.añadirUsuario(this.user).subscribe(
      (res) => {
        Swal.fire('Registrado!', 'Ahora inicia sesion', 'success').then(
          (okay) => {
            if (okay) {
              console.log('Registrado!');
              this.router.navigate(['login']);
            }
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
}
