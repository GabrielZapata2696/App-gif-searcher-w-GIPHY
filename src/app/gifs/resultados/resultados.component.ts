import { Component, OnInit } from '@angular/core';
import { Gif } from '../interfaces/gifs.interfaces';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(
    private gifService: GifService
  ) { }

  get resultados(): Gif[] {
    return this.gifService.resultados;
  }

  ngOnInit(): void {
  }

}
