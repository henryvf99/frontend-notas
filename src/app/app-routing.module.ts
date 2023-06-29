import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./pages/register/register.component";
import {LoginComponent} from "./pages/login/login.component";
import {NotasComponent} from "./pages/notas/notas.component";
import { ActualizarNotaComponent } from './pages/actualizar-nota/actualizar-nota.component';
import {IsLoggedInGuard} from "./guards/isLoggedIn/is-logged-in.guard";

const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  {
    path: 'notas',
    component: NotasComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'notas/:id/edit',
    component: ActualizarNotaComponent,
    pathMatch: 'full',
    canActivate: [IsLoggedInGuard],
  },
  { 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
