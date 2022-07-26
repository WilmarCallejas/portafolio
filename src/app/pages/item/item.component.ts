import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { productosDescripcion } from '../../interfaces/producto-descripcion.interface';
import { Productos } from '../../interfaces/producto.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

 producto: productosDescripcion={};
 id: String='';

  constructor(private route: ActivatedRoute,
              public productosService: ProductosService) { }

  ngOnInit(): void {

      this.route.params
      .subscribe(parametros =>{

        //console.log(parametros['id']);

        this.productosService.getProducto(parametros['id'])
        .subscribe( (producto) =>{

              this.id=parametros['id'];
              this.producto=producto;
         
          

        });
      })
  }

}
