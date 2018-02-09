import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventoNegocios } from '../../evento-negocio/evento-negocios';
import { Negocio } from '../../../negocio';
import { Usuario } from '../../../usuario';
import { EventoUsuarios } from '../evento-usuarios';
import { EventoUsuariosServiceService } from '../evento-usuarios-service.service';

@Component({
  selector: 'evento-buscar',
  templateUrl: './evento-buscar.component.html',
  styleUrls: ['./evento-buscar.component.css']
})
export class EventoBuscarComponent implements OnInit {

  @Output() eventoBuscarEvento = new EventEmitter;
  @Output() eventoAnadidoEvento = new EventEmitter;
 
  @Input() eventoBuscado;
  @Input() Usuario:Usuario;
  eventoBuscar: EventoNegocios = new EventoNegocios();
  eventoUsuario:EventoUsuarios = new EventoUsuarios();
  negocio:Negocio = new Negocio();
  evento:any={};

  constructor(private _eventoUsuService:EventoUsuariosServiceService) { }

  ngOnInit() {
  }

  buscar(event){
    console.log(this.negocio.nombreN)
    //this.eventoBuscar.negocio.nombreN= this.negocio.nombreN;
    console.log("Buscar")
    console.log(this.eventoBuscar)
    //this.evento= this.eventoBuscarEvento.emit(this.eventoBuscar.negocio.nombreN);
    this.eventoBuscarEvento.emit(this.eventoBuscar);
    }

    

    anadir(event, evento:EventoNegocios){

      console.log("Añadir")
      console.log(evento)
      this.eventoUsuario.eventonegocio = evento;
      this.eventoUsuario.usuario = this.Usuario;

      console.log(this.eventoUsuario)


    this._eventoUsuService.getSaveEventoUsuario(this.eventoUsuario).subscribe(res =>
      {
        console.log("Exito");
        console.log(this.eventoUsuario)
        this.eventoAnadidoEvento.emit(this.eventoUsuario)
        console.log("Exito2")
      });

 
    }
  
}
