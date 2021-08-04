import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SetProductosComponent } from './backend/set-productos/set-productos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { MispedidosComponent } from './pages/mispedidos/mispedidos.component';
import { map} from 'rxjs/operators';
import { canActivate} from '@angular/fire/auth-guard';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

const isAdmin = (next:any)=> map ( (user:any) =>!!user && 'BdCvG4tpr5WKoedexqhHBy8HTc72' == user.uid);

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'set-productos', component: SetProductosComponent,... canActivate(isAdmin)},
  { path: 'pedidos',component: PedidosComponent,... canActivate(isAdmin)},
  { path: 'mis-pedidos',component: MispedidosComponent},
  { path: 'perfil', component:PerfilComponent},
  {path: 'carrito', component:CarritoComponent},
  { path: '', component: HomeComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }