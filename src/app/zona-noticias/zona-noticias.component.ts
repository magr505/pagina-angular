import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NoticiasService} from '../noticias.service';

@Component({
  selector: 'app-zona-noticias',
  templateUrl: './zona-noticias.component.html',
  styleUrls: ['./zona-noticias.component.scss']
})
export class ZonaNoticiasComponent implements OnInit {

  servicios: any[] = [];

  constructor(
    private ruta: ActivatedRoute,
    private servicio: NoticiasService
  ) {
    this.ruta.params.subscribe(params => {
      console.log(params[' id ']);
      this.servicios = this.servicio.obtenerUno(params['id']);
    });
  }

  ngOnInit() {
  }

}
