import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { Productos } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando= true;
   productos: Productos[]=[];

  constructor( private http: HttpClient) { 
 
    this.cargarProductos();
  }

  private cargarProductos(){
 
    this.http.get('https://primer-angular-html-default-rtdb.firebaseio.com/productos_idx.json')
         .subscribe((resp: any) =>{

  
   //this.equipo=resp;   
       console.log( resp );
      this.productos=resp;
          this.cargando=false;
         
      });

  }

   
}
