import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';
import { CrearFacturaVentaComponent } from './crear-factura-venta/crear-factura-venta.component';
import { ListarFacturasComponent } from './listar-facturas/listar-facturas.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SidebarTopComponent } from './sidebar-top/sidebar-top.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
    declarations: [
        AppComponent,
        CrearProductoComponent,
        ListarProductoComponent,
        RegistrarProductoComponent,
        RegistrarPersonaComponent,
        ListarPersonaComponent,
        CrearFacturaVentaComponent,
        ListarFacturasComponent,
        LoginComponent,
        SidebarTopComponent,
        InicioComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
