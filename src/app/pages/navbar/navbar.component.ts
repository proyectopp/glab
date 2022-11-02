import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  usuario = new FormGroup({
    Nombre: new FormControl('',Validators.required),
    Contrasena: new FormControl('',Validators.required)
  })

  usuarioSeleccionado!: Usuario;
  
  collecionDeUsuarios!: Usuario[];

  modalVisible:boolean=false;
 

  constructor(private servicioUsuarios:UsuarioService) { }
  usuarios=this.servicioUsuarios.obtenerUsuarios();
  items: MenuItem[]=[];
  adminVisible=false;
  textoBoton!: string;
  ngOnInit(): void {
    this.items = [
      {
        label:'Inicio',
        routerLink:'home'
       },
        
      {
      label:'Tienda',
    icon:'pi pi-book',
    items:[{
       label:'Mujer',
         icon:'pi pi-apple',
         routerLink:'mujer'
            },
          {
          label:'Hombre',
               icon:'pi pi-apple',
               routerLink:'hombre'
             },
             {
              label:'Accesorios',
             icon:'pi pi-apple',
             routerLink:'accesorios'
            }
           ]
         },
        {
           label:'Nosotros',
           icon:'pi pi-phone',
           routerLink:'nosotros'
         },
         {
          label:'Admin',
           icon:'pi pi-user',
           routerLink:'admin',
           visible:this.adminVisible
         }
     ];
     this.servicioUsuarios.obtenerUsuarios().subscribe(usuario=>this.collecionDeUsuarios=usuario)
}

verificarUsuario(){
  this.usuarios.forEach(usuario =>{
    if(this.usuario.valid){
    if(usuario==this.collecionDeUsuarios){
      alert("Iniciaste sesion correctamente")
    }
    else{
      alert("El usuario no esta registrado")
    }
    }
    else{
      alert("Hubo un problema para iniciar sesion")
    }
  })
 }

 mostrarDialogo(){
  this.textoBoton ="Iniciar Sesion"
  this.modalVisible=true
  this.adminVisible=true
  this.ngOnInit()
}
  }
