import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../services/nota/nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from '../notas/notaModel';

@Component({
  selector: 'app-actualizar-nota',
  templateUrl: './actualizar-nota.component.html',
  styleUrls: ['./actualizar-nota.component.css'],
})
export class ActualizarNotaComponent implements OnInit {
  private id: number;
  public nota: Nota;

  public titulo: string = '';
  public descripcion: string = '';

  constructor(
    private notaService: NotaService,
    private router: Router,
    public activeRoute: ActivatedRoute
  ) {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      this.id = Number(paramMap.get('id'));
      this.notaService.get(this.id).subscribe((data: any) => {
        this.nota = data?.body;
        this.titulo = data?.body.titulo;
        this.descripcion = data?.body.descripcion;
      });
    });
  }

  ngOnInit(): void {}  

  update() {
    this.nota.titulo = this.titulo;
    this.nota.descripcion = this.descripcion;
    this.notaService.update(this.nota).subscribe(() => {
      this.router.navigate(['notas']);
    });
  }

}
