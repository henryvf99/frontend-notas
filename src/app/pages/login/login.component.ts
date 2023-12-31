import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading=false;

  loginData = {
    username : '',
    password : ''
  }

  constructor(private titulo:Title, private _snackBar: MatSnackBar, private router: Router, private loginService:LoginService){
    titulo.setTitle("Login")
  }

  login(){
    //Verifica si hay un username ingresado
    if(this.loginData.username.trim() == '' || this.loginData.password.trim() == null){
      this._snackBar.open('El nombre de usuario es requerido !!','Aceptar',{
        duration: 3000
      })
      return;
    }
    //Verifica si hay una password ingresada
    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this._snackBar.open('La contraseña es requerida !!','Aceptar',{
        duration: 3000
      })
      return;
    }
    this.loginService.generateToken(this.loginData)
      .subscribe((data:any)=>{
          this.loginService.loginUser(data.token);
          //console.log(data.token);
          this.loginService.getCurrentUser()
            .subscribe((user:any)=>{
              this.loginService.setUser(user);
              console.log(user.id);
              if(this.loginService.getUserRole() == "ADMIN"){
                //Mostraremos el dashboard del admin
                this.adminLoading();
                console.log("logeado");
                this.loginService.loginStatusSubject.next(true);
              }else if(this.loginService.getUserRole() == "NORMAL"){
                this.normalLoading();
                //Mostraremos el dashboard del usuario
                //this.router.navigate(['user-dashboard'])
                this.loginService.loginStatusSubject.next(true);
              }
              else {
                this.loginService.logout();
              }
            })
        },(error) =>{
          this.error();
        }
      )
  }



  ngOnInit(): void {

  }
  error(){
    this._snackBar.open('Usuario o contraseña invalidos','Aceptar',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: "bottom"
    })
  }

  adminLoading(){
    this.loading = true;
    setTimeout(()=>{

      //redireccionamos a la pagina principal
      this.router.navigate(['/notas']);
      this.loading=false;
    }, 1000)
  }
  normalLoading(){
    this.loading = true;
    setTimeout(()=>{

      //redireccionamos a la pagina principal
      this.router.navigate(['']);
      this.loading=false;
    }, 1000)
  }

}
