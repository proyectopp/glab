import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from "primeng/inputtext";


import {MenubarModule} from 'primeng/menubar'; //navbar
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';

import { AlertService } from './servicios/alert.service';
import { UsuarioService } from './servicios/usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { GuardiaGuard } from './guardia.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    MujerComponent,
    HombreComponent,
    AccesoriosComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    DialogModule,
    CarouselModule,
    ButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [UsuarioService,AlertService,CookieService, GuardiaGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
