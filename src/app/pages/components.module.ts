import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MujerComponent } from './mujer/mujer.component';
import { HombreComponent } from './hombre/hombre.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ConjuntosComponent } from './conjuntos/conjuntos.component';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    MujerComponent,
    HombreComponent,
    AccesoriosComponent,
    NavbarComponent,
    NosotrosComponent,
    FooterComponent,
    ConjuntosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
