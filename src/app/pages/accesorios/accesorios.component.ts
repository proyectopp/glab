import { Component, OnInit } from '@angular/core';
import { Accesorios } from 'src/app/models/accesorios';
import { AccesoriosService } from 'src/app/servicios/accesorios.service';
@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {
  responsiveOptions;
  collecionAccesorios: Accesorios[] = [];
  displayModal: boolean = false;
  constructor(private servicioAccesorios:AccesoriosService) {
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
    this.servicioAccesorios.obtenerAccesorios().subscribe(accesorios=>{this.collecionAccesorios=accesorios
    console.log(accesorios)
    })
  }
  showModalDialog() { 
    this.displayModal = true;
}

}
