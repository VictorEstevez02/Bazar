import { Injectable, } from '@angular/core';
import { producto } from './lista-de-producto/producto';
import { Observable, of } from 'rxjs';
import { productoLista } from './lista-de-producto';



@Injectable({
  providedIn: 'root'
})
export class BazarServiceService {

  constructor() { }

  obtenerListaProducto():  producto[] {
    const producto = (productoLista)
    return producto

  }

  obternerProducto(id:number): producto  {

    const product = productoLista.find(p=> p.id === id ) !
    return (product)


  }

}


