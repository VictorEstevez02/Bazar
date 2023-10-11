import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDeProductoComponent } from './lista-de-producto/lista-de-producto.component';
import { DetalleDeProductoComponent } from './detalle-de-producto/detalle-de-producto.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'productos',component:ListaDeProductoComponent},
  {path:'detalleDeProducto/:id',component:DetalleDeProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
