import { Component, EventEmitter, Input, Output } from '@angular/core';
import { producto } from '../lista-de-producto/producto';

@Component({
  selector: 'app-filtrar-producto',
  templateUrl: './filtrar-producto.component.html',
  styleUrls: ['./filtrar-producto.component.scss']
})
export class FiltrarProductoComponent {

  @Input() lista:producto[] = []
  @Output() filtrarProducto:EventEmitter<producto[]> = new EventEmitter<producto[]>

  operacionFiltrar (productos:string) {
    const buscarProducto = productos.toLowerCase()
    const filtrar = this.lista.filter(producto=>producto.nombre.toLowerCase() == buscarProducto)
    this.filtrarProducto.emit(filtrar)

  }

  mostrarTodo () {
    this.filtrarProducto.emit(this.lista)
  }

}
