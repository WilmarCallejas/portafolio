import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { infoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public servicio: InfoPaginaService,
               private router: Router) {


   }

  ngOnInit(): void {
  }

  buscarProducto(termino: String){

    if(termino.length<1){
      return;
    }

    this.router.navigate(['/search', termino]);

           //console.log(termino);

    
  }

}
