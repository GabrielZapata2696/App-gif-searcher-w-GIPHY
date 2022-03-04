import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interfaces';

const API_URL: string = `${environment.API_URL}`;
const API_KEY: string = `${environment.API_KEY}`;

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _historial: string[] = [];
  offset: number = 0;
  public resultados: Gif[] = [];

  constructor(
    private http: HttpClient
  ) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('previo')!) || [];

  }


  get obtenerHistorial() {
    return [...this._historial];
  }


  buscarGifs(busqueda: string, limite: number, offsetEnviado: number) {
    busqueda = busqueda.trim().toLowerCase();

    if (!this._historial.includes(busqueda)) {
      this._historial.unshift(busqueda);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    this.offset = this.offset + offsetEnviado;

    const params = new HttpParams()
      .set('api_key', API_KEY)
      .set('q', busqueda)
      .set('limit', `${limite}`)
      .set('offset', `${this.offset}`)
      ;

    this.http.get<SearchGifsResponse>(`${API_URL}/search`, { params })
      .subscribe((resp: SearchGifsResponse) => {
        this.resultados = [];
        localStorage.removeItem('previo');
        this.resultados = resp.data;
        localStorage.setItem('previo', JSON.stringify(this.resultados));
      });


  }

  vaciarHistorial() {
    this._historial = [];
    localStorage.removeItem('historial');
    return;
  }

}
