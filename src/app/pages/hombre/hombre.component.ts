import { Component, OnInit } from '@angular/core';
import { Hombre } from 'src/app/models/hombre';
import { HombreService } from 'src/app/servicios/hombre.service';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent implements OnInit {
  responsiveOptions;
  collecionHombres: Hombre[] = [];
  displayModal: boolean = false;

  constructor(private servicioHombres:HombreService) { 
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
  }
  showModalDialog() { 
    this.displayModal = true;
}
}
