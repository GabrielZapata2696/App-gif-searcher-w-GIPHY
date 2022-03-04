import { Component, OnInit } from '@angular/core';
import { GifService } from '../../gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private gifService: GifService
  ) { }

  get historial() {
    return this.gifService.obtenerHistorial;
  }

  ngOnInit(): void {
  }

  vaciarHistorial() {
    this.gifService.vaciarHistorial();
  }

  buscar(item: string) {
    this.gifService.buscarGifs(item, 9, 10);
  }

}
