import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeProductoComponent } from './lista-de-producto/lista-de-producto.component';
import { FiltrarProductoComponent } from './filtrar-producto/filtrar-producto.component';
import { HomeComponent } from './home/home.component';
import { DetalleDeProductoComponent } from './detalle-de-producto/detalle-de-producto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzInputModule,
    NzListModule,
    NzIconModule.forRoot([]),
    NzBreadCrumbModule
  ],

  bootstrap: [AppComponent],

  providers: [

  ]
})
export class AppModule { }
