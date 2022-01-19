import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';
import { CrearFacturaVentaComponent } from './crear-factura-venta/crear-factura-venta.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListarFacturasComponent } from './listar-facturas/listar-facturas.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { LoginComponent } from './login/login.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'crear-factura', component: CrearFacturaVentaComponent },
    { path: 'crear-producto', component: CrearProductoComponent },
    { path: 'editar-producto/:id', component: CrearProductoComponent },
    { path: 'listar-facturas', component: ListarFacturasComponent },
    { path: 'listar-personas', component: ListarPersonaComponent },
    { path: 'listar-productos', component: ListarProductoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registrar-persona', component: RegistrarPersonaComponent },
    { path: 'editar-persona/:id', component: RegistrarPersonaComponent },
    { path: '**', redirectTo: '',  pathMatch: 'full' },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
