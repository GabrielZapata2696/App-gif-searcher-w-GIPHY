import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {


  @ViewChild('txtBuscar') buscador!: ElementRef<HTMLInputElement>;

  limite: number = 10;


  constructor(
    private gifService: GifService
  ) { }

  ngOnInit(): void {

  }

  buscar() {
    const filtro = this.buscador.nativeElement.value;

    if (filtro.trim().length === 0) { return; }

    this.gifService.buscarGifs(filtro, this.limite);
    this.buscador.nativeElement.value = '';

  }


}
