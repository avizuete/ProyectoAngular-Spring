import { Component, OnInit, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { trigger, state, animate, transition, style } from '@angular/animations';
import { EventoNegocios } from '../evento-negocio/evento-negocios';
import { EventoUsuariosServiceService } from './evento-usuarios-service.service';
import { Usuario } from '../../usuario';
import { EventoUsuarios } from './evento-usuarios';


@Component({
  selector: 'evento-usu',
  templateUrl: './evento-usu.component.html',
  styleUrls: ['./evento-usu.component.css'],

})
export class EventoUsuComponent implements OnInit {
  @Input() Usuario:Usuario;
  private eventoBuscado :EventoNegocios;
  eventoUsuarios:EventoUsuarios[];
  private activoB: boolean = false;
  constructor(private _eventoUsuService:EventoUsuariosServiceService) { }

  ngOnInit() {
    this.getEventos()
  }
/*
  buscar(event){
    console.log("Buscar")
    if(this.activoB== false)
      this.activoB= true;
    else{
      this.activoB = false
      this.eventoBuscado = null
    }  
    console.log(this.activoB)
  }*/
  getEventos(){
    console.log("getEventos")
    console.log(this.Usuario)
    this._eventoUsuService.getEventos<EventoUsuarios[]>(this.Usuario)
    .subscribe((data: EventoUsuarios[]) => this.eventoUsuarios = data,
      error => () => {
        console.log("Error getEventos");

      },
      ()=>{
        //this.eventoUsuarioCargados= true;
        console.log(this.eventoUsuarios)
        console.log("Exito getEventos");
      }
    );
  }



  buscarEvento(evento:EventoNegocios){
    console.log(evento)
    this._eventoUsuService.getEventosName<EventoNegocios>(evento)
    .subscribe((data:EventoNegocios) => this.eventoBuscado = data,
      error => () => {
        console.log("Error");
      },
      ()=> {
        console.log(this.eventoBuscado)
        console.log("Exito");
      },
     
    );

    
    

  }

  borrar(evento:EventoUsuarios) {
    console.log("Borrar")
    this._eventoUsuService.deleteEventoById(evento.idEventoUsuario)
    .subscribe( res => {
      console.log('Ok');
     
    }
    ); 

    const i = this.eventoUsuarios.indexOf(evento);

    this.eventoUsuarios.splice(i, 1);
  

}

anadir(event){
  console.log("añadiriri")
this.eventoUsuarios.push(event)
this.getEventos()
}
}