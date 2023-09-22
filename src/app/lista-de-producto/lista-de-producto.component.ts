import { Component } from '@angular/core';
import { producto } from './producto';
import { productoLista } from '../lista-de-producto';
import { BazarServiceService } from '../bazar-service.service';

@Component({
  selector: 'app-lista-de-producto',
  templateUrl: './lista-de-producto.component.html',
  styleUrls: ['./lista-de-producto.component.scss']
})
export class ListaDeProductoComponent {
  titulo:string = "BAZAR"

  listaDeProductos:producto[] =  productoLista
  filtrarProductos:producto[] = this.listaDeProductos

  constructor ( productoService:BazarServiceService) {
    this.listaDeProductos = productoService.obtenerListaProducto()

  }


  operacionProducto(producto:producto[]) {
    this.filtrarProductos = producto


  }

}
