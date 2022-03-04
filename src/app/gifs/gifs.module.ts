import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsMainPageComponent } from './gifs-main-page/gifs-main-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    GifsMainPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    GifsMainPageComponent
  ]
})
export class GifsModule { }
