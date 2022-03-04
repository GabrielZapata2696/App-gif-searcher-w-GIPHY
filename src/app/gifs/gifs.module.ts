import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsMainPageComponent } from './gifs-main-page/gifs-main-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsMainPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsMainPageComponent
  ]
})
export class GifsModule { }
