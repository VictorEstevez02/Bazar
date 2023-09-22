import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeProductoComponent } from './lista-de-producto/lista-de-producto.component';
import { FiltrarProductoComponent } from './filtrar-producto/filtrar-producto.component';
import { HomeComponent } from './home/home.component';
import { DetalleDeProductoComponent } from './detalle-de-producto/detalle-de-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeProductoComponent,
    FiltrarProductoComponent,
    HomeComponent,
    DetalleDeProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
