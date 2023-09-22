import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productoLista } from '../lista-de-producto';
import { producto } from '../lista-de-producto/producto';
import { BazarServiceService } from '../bazar-service.service';

@Component({
  selector: 'app-detalle-de-producto',
  templateUrl: './detalle-de-producto.component.html',
  styleUrls: ['./detalle-de-producto.component.scss']
})
export class DetalleDeProductoComponent {
  titulo:string = "BAZAR"

  producto:producto[] = productoLista
  elejirProducto:producto | undefined

  constructor (route:ActivatedRoute, bazarservice :BazarServiceService) {
      const pId:number = parseInt(route.snapshot.params["id"])

      this.elejirProducto = bazarservice.obternerProducto(pId)

  }

}
