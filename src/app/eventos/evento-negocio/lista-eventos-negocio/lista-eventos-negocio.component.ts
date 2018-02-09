import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EventoNegocios } from '../evento-negocios';
import { EventoNegociosServiceService } from '../evento-negocios-service.service';
@Component({
  selector: 'lista-eventos-negocio',
  templateUrl: './lista-eventos-negocio.component.html',
  styleUrls: ['./lista-eventos-negocio.component.css']
})
export class ListaEventosNegocioComponent implements OnInit {

  @Input() eventosN;
  constructor(private _negocioService:EventoNegociosServiceService, ) { }

  @Output() borrarEventoEvento = new EventEmitter();
  @Output() editarEventoEvento = new EventEmitter();
  evento:any={};
  ngOnInit() {
    
  }
  borrar(evento: EventoNegocios){
    console.log("Evento Borrar")
    console.log(evento)
    this.borrarEventoEvento.emit(evento);
  }



  editar(evento){
    
    this.editarEventoEvento.emit(evento);
  }
/*
  enviar(event,evento: EventoNegocios){
    
    this.service.isUserLoggedIn = true;
   // this.service.setUserLoggedIn();
    
    this.service.setData(evento)
    this.router.navigate(['/enviar']);
  }
*/
}
