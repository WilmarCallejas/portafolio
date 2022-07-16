import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;

  constructor( private Http: HttpClient) { 

      // console.log('servicio de pagina listo ;-)');


       //aca se creara el codigo para leer el archivo Json

       this.Http.get('assets/data/data-pagina.json')
       .subscribe((resp:infoPagina) =>{

        this.cargada=true;
         this.info=resp;   
        console.log( resp );

       }
       );
  }
}
