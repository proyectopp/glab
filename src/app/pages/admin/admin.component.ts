import { Component, OnInit } from '@angular/core';
import { MujerService } from 'src/app/servicios/mujer.service';
import { HombreService } from 'src/app/servicios/hombre.service';
import { Hombre } from 'src/app/models/hombre';
import { Mujer } from 'src/app/models/mujer';


import { Accesorios } from 'src/app/models/accesorios';
import { AccesoriosService } from 'src/app/servicios/accesorios.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  responsiveOptions;
  collecionHombres: Hombre[] = [];
  
  collecionMujeres: Mujer[] = [];

  collecionAccesorios: Accesorios[] = [];
  cols: any[];
  exportColumns: any[];
  selectedProducts: Mujer[];



  constructor(private servicioHombres:HombreService,private servicioMujer:MujerService,private servicioAccesorios:AccesoriosService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
}

  ngOnInit(): void {
    this.servicioHombres.obtenerProductoH().subscribe(hombre=>this.collecionHombres=hombre)
    this.servicioMujer.obtenerProductoM().subscribe(mujer=>this.collecionMujeres=mujer)
    this.servicioAccesorios.obtenerAccesorios().subscribe(accesorios=>this.collecionAccesorios=accesorios)

}

}

