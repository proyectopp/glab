import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MujerComponent } from './mujer/mujer.component';
import { HombreComponent } from './hombre/hombre.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    MujerComponent,
    HombreComponent,
    AccesoriosComponent,
    NavbarComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
