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

  equipo: any[]=[];

  constructor( private Http: HttpClient) { 

      // console.log('servicio de pagina listo ;-)');

         this.cargarInfo();
         this.cargarEquipo();
       
  }


  

  private cargarInfo(){

//aca se creara el codigo para leer el archivo Json

this.Http.get('assets/data/data-pagina.json')
.subscribe((resp:infoPagina) =>{

 this.cargada=true;
  this.info=resp;   


}
);

  }

    private cargarEquipo(){
 
      this.Http.get('https://primer-angular-html-default-rtdb.firebaseio.com/equipo.json')
           .subscribe((resp:any) =>{

    
     this.equipo=resp;   
     //console.log( resp );

}
);
    }

}
