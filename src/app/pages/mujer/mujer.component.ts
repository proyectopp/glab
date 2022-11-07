import { Component, OnInit } from '@angular/core';
import { Mujer } from 'src/app/models/mujer';
import { MujerService } from 'src/app/servicios/mujer.service';
@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.css']
})
export class MujerComponent implements OnInit {
  responsiveOptions;
  collecionMujeres: Mujer[] = [];
  displayModal: boolean = false;

  constructor(private servicioMujer:MujerService) { 
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
  ];}

  ngOnInit(): void {
    this.servicioMujer.obtenerProductoM().subscribe(mujer=>this.collecionMujeres=mujer)

  }
  showModalDialog() { 
    this.displayModal = true;
}
}
