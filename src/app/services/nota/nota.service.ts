import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Nota} from '../../pages/notas/notaModel';

@Injectable({
  providedIn: 'root',
})
export class NotaService {
  constructor(private http: HttpClient) {}

  public agregarNota(nota: any) {
    return this.http.post(`${environment.baseUrl}/notas`, nota);
  }

  public listarNotas() {
    return this.http.get<Nota[]>(`${environment.baseUrl}/notas`);
  }

  eliminarNota(id: number) {
    return this.http.delete(`${environment.baseUrl}/notas/${id}`);
  }

  get(id: number) {
    return this.http.get(`${environment.baseUrl}/notas/${id}`);
  }

  update(nota: Nota) {
    return this.http.put(`${environment.baseUrl}/notas`, nota);
  }
}
