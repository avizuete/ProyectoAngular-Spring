import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../../../usuario';
import { EventoUsuarios } from '../evento-usuarios';
import { EventoUsuariosServiceService } from '../evento-usuarios-service.service';
import { ValoracionEventoService } from '../../valoracion-evento.service';
import { ValoracionEvento } from '../../valoracion-evento';

@Component({
  selector: 'lista-eventos-usuario',
  templateUrl: './lista-eventos-usuario.component.html',
  styleUrls: ['./lista-eventos-usuario.component.css']
})
export class ListaEventosUsuarioComponent implements OnInit {
  @Input() Usuario:Usuario;
  valoracionEvento:ValoracionEvento = new ValoracionEvento();
  eventoValorado:ValoracionEvento;
  busquedaEventoValorado:ValoracionEvento;
  @Output() borrarUsuarioEvento = new EventEmitter();
  //eventoAnandido:EventoUsuarios[];
  todasLasValoraciones:ValoracionEvento[];
   @Input() eventoUsuarios:EventoUsuarios[];
  eventoUsuarioCargados:boolean= false;
  constructor(private _eventoUsuService:EventoUsuariosServiceService,
  private _valoracionEventoService:ValoracionEventoService) { }
  nota:number;
  ngOnInit() {
    //this.getEventos();
  }


  

/*
  getEventos(){
    console.log("getEventos")
    console.log(this.Usuario)
    this._eventoUsuService.getEventos<EventoUsuarios[]>(this.Usuario)
    .subscribe((data: EventoUsuarios[]) => this.eventoUsuarios = data,
      error => () => {
        console.log("Error getEventos");

      },
      ()=>{
        this.eventoUsuarioCargados= true;
        console.log(this.eventoUsuarios)
        console.log("Exito getEventos");
      }
    );
  }
*/
  borrar(evento: EventoUsuarios){
    console.log("Borrar1")
    this.borrarUsuarioEvento.emit(evento);
  }

  valorar(valor:number,evento:EventoUsuarios){
    console.log(valor)
    this.valoracionEvento.nota = valor;
    this.valoracionEvento.eventonegocio = evento.eventonegocio;
    this.valoracionEvento.usuario = evento.usuario
    console.log(this.valoracionEvento)

    var valoracion= this.buscarValoracionEvento(this.valoracionEvento);
    console.log("valoracion")
    console.log(valoracion)

   
  }

  buscarValoracionEvento(eventoBuscar:ValoracionEvento){
    console.log("buscarValoracionEvento")
    console.log(eventoBuscar)
  
    
    this._valoracionEventoService.getValoracionesEvento<ValoracionEvento>(eventoBuscar)
    .subscribe((data: ValoracionEvento) => this.eventoValorado = data,
      error => () => {
        console.log("Error getEventos");

      },
      ()=>{
       
        console.log("Exito getEventos");
        console.log(this.eventoValorado)
        console.log("Exito getEventos");

        if( this.eventoValorado[0] != null){
          this.borrarValoracionEvento(this.eventoValorado[0]);
          this.insertarValoracionEvento(eventoBuscar);
        }else{
          this.insertarValoracionEvento(eventoBuscar);
        }
    
       
       
      }
    );
  }

  insertarValoracionEvento(eventoinsertar:ValoracionEvento){
    console.log("insertarValoracionEvento")
    console.log(eventoinsertar)
    this._valoracionEventoService.getSaveValoracionEvento(eventoinsertar).subscribe(res =>
      {
        console.log("Exito");
        
        
        console.log("Exito2")
      });

  }


  borrarValoracionEvento(eventoBorrar:ValoracionEvento){
    console.log("borrarValoracionEvento")
    console.log(eventoBorrar.idValoracionEvento)
    this._valoracionEventoService.deleteValoracionEvento(eventoBorrar.idValoracionEvento).subscribe(res =>
      {
        console.log("Exito");
        
        
        console.log("Exito2")
      });
  }



  /*getEventos(){
    console.log("getEventos")
    console.log(this.Usuario)
    this._valoracionEventoService.getEventos<ValoracionEvento[]>()
    .subscribe((data: ValoracionEvento[]) => this.todasLasValoraciones = data,
      error => () => {
        console.log("Error getEventos");

      },
      ()=>{
        //this.eventoUsuarioCargados= true;
        console.log(this.eventoUsuarios)
        console.log("Exito getEventos");
      }
    );
  }*/
}


