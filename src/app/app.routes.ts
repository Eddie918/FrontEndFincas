import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPropiedadComponent } from './components/crear-propiedad/crear-propiedad.component';
import { ListarPropiedadesComponent } from './components/listar-propiedades/listar-propiedades.component';
import { CrearArrendadorComponent } from './components/crear-arrendador/crear-arrendador.component';
import { ListarArrendadoresComponent } from './components/listar-arrendadores/listar-arrendadores.component';
import { CrearArrendatarioComponent } from './components/crear-arrendatario/crear-arrendatario.component';
import { ListarArrendatariosComponent } from './components/listar-arrendatarios/listar-arrendatarios.component';
import { MejoresPropiedadesComponent } from './components/mejores-propiedades/mejores-propiedades.component';
import { InicioDeSesionComponent } from './components/inicio-de-sesion/inicio-de-sesion.component';
import { PropiedadComponent } from './components/propiedad/propiedad.component';
import { CrearSolicitudComponent } from './components/crear-solicitud/crear-solicitud.component';
import { AccesoArrendatarioComponent } from './testComponent/acceso-arrendatario/acceso-arrendatario.component';
import { AccesoArrendadorComponent } from './testComponent/acceso-arrendador/acceso-arrendador.component';
import { RoleGuard } from './role-guard.guard';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
    { path: '', component: MejoresPropiedadesComponent},
    { path: 'pruebaPost', component: CrearPropiedadComponent},
    { path: 'pruebaGet', component: ListarPropiedadesComponent},
    { path: 'propiedad/:id', component: PropiedadComponent},
    { path: 'Arrendadores/nuevo', component: CrearArrendadorComponent},
    { path: 'Arrendadores', component: ListarArrendadoresComponent},
    { path: 'Arrendatarios/nuevo', component: CrearArrendatarioComponent},
    { path: 'Arrendatarios', component: ListarArrendatariosComponent},
    { path: 'login', component: InicioDeSesionComponent},
    { path: 'crear-solicitud', component: CrearSolicitudComponent },
    { path: 'crear-solicitud/:id', component: CrearSolicitudComponent, canActivate: [AuthGuard] },
    { path: 'access-denied', component: AccessDeniedComponent },
    { 
        path: 'accesoArrendador',
        component: AccesoArrendadorComponent,
        canActivate: [RoleGuard],
        data: { expectedRoles: ['ARRENDADOR', 'ADMIN'] }
    },
    { 
        path: 'accesoArrendatario',
        component: AccesoArrendatarioComponent,
        canActivate: [RoleGuard], data:
        { expectedRoles: ['ARRENDATARIO', 'ADMIN']}
    },


];
