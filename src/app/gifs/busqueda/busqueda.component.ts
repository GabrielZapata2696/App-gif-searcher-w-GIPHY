import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {


  @ViewChild('txtBuscar') buscador!: ElementRef<HTMLInputElement>;

  limite: number = 9;


  constructor(
    private gifService: GifService
  ) { }

  ngOnInit(): void {

  }

  buscar() {
    const filtro = this.buscador.nativeElement.value;

    if (filtro.trim().length === 0) { return; }
    this.gifService.offset = 0;
    this.gifService.buscarGifs(filtro, this.limite, 10);
    this.buscador.nativeElement.value = '';

  }


}
