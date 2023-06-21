import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user = {
    username: '',
    password: '',
    email: '',
  }
  constructor() {
  }

  register() {
    if(this.user.username == '' || this.user.username == null) {
      alert("El nombre de usuario es requerido");
      return;
    }
    //this.registerService.añadirUsuario(this.user)
  }
  ngOnInit(): void {

  }
}
