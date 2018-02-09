import { Component, OnInit,Input } from '@angular/core';
import { ValoracionEvento } from '../../valoracion-evento';
import { ValoracionEventoService } from '../../valoracion-evento.service';

@Component({
  selector: 'valoracion-vigente',
  templateUrl: './valoracion-vigente.component.html',
  styleUrls: ['./valoracion-vigente.component.css']
})
export class ValoracionVigenteComponent implements OnInit {

  @Input() evento;
  eventoBuscar:ValoracionEvento = new ValoracionEvento()
  constructor(private _valoracionEventoService:ValoracionEventoService) { }
  valoracionEvento:ValoracionEvento

  ngOnInit() {
    console.log("sdasdasdassd")
    console.log(this.evento.usuario)
    console.log(this.evento.eventonegocio)
    this.eventoBuscar.usuario = this.evento.usuario;
    this.eventoBuscar.eventonegocio = this.evento.eventonegocio;
    console.log("dadasdasdasdas")
    console.log(this.eventoBuscar)
    this.buscarValoracionActual(this.eventoBuscar)
  }


  buscarValoracionActual(eventoBuscar:ValoracionEvento){
    console.log("buscarValoracionActua")
    console.log(eventoBuscar)
  
    
    this._valoracionEventoService.getValoracionesEvento<ValoracionEvento>(eventoBuscar)
    .subscribe((data: ValoracionEvento) => this.valoracionEvento = data,
      error => () => {
        console.log("Error getEventos");

      },
      ()=>{
       
        console.log("Exito buscarValoracionActua");
        console.log(this.valoracionEvento[0].nota)
        console.log("Exito buscarValoracionActua");

      
    
       
       
      }
    );
  }

}
