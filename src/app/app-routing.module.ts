import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaDeProductoComponent } from './lista-de-producto/lista-de-producto.component';
import { DetalleDeProductoComponent } from './detalle-de-producto/detalle-de-producto.component';

const routes: Routes = [
  { path:"",component:HomeComponent },
  { path:"productos",component:ListaDeProductoComponent},
  { path:"detalleDeProducto/:id",component:DetalleDeProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
