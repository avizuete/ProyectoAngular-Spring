import { Component, OnInit,Input } from '@angular/core';

import { EventoNegociosServiceService } from './evento-negocios-service.service';
import { EventoNegocios } from './evento-negocios';
import { ServiceEnviadoService } from '../../service-enviado.service';
import { Negocio } from '../../negocio';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from '../../home/service.service';

@Component({
  selector: 'evento-negocio',
  templateUrl: './evento-negocio.component.html',
  styleUrls: ['./evento-negocio.component.css']
})
export class EventoNegocioComponent implements OnInit {
  @Input() Negocio:Negocio;
  usuarioN:Negocio;
  private eventosN : EventoNegocios[];
  private activo: boolean = false;
  negociocargadoevento:boolean= false;
  negocioCockie= new Negocio();
  constructor(private _negocioService:EventoNegociosServiceService,
              private serviceEnviado:ServiceEnviadoService,
              private cookieService: CookieService,
              private serviceNegocio:ServiceService,) { }

  ngOnInit() {
    
    if(this.cookieService.get('loginNegocio') != 0){
     
      this.usuarioN=this.Negocio;
      this.negociocargadoevento= true;
      
    }else{
      this.usuarioN=this.serviceEnviado.getData()
      this.negociocargadoevento= true;
    }


    if( this.negociocargadoevento == true){
     
      this.getEventos();

    }
    
    

    
  }

  anadir(event){
    if(this.activo== false)
      this.activo= true;
    else{
      this.activo = false
    }  

  }

  crear(eventoNegocio:EventoNegocios){
    let event:EventoNegocios = new EventoNegocios(null,
      eventoNegocio.nombre,
      eventoNegocio.fecha,
      eventoNegocio.descripcion,
      this.usuarioN
    );
   
    this._negocioService.create(event).subscribe(res =>
    {
      this.eventosN.push(event);
      this.getEventos();
      
    });
    
  }

  getEventos(){
    
    this._negocioService.getUsuarios<EventoNegocios[]>(this.usuarioN)
    .subscribe((data: EventoNegocios[]) => this.eventosN = data,
      error => () => {
        console.log("Error getEventos");

      },
      ()=>{
        
        console.log("Exito getEventos");
      }
    );
  }

  borrar(evento:EventoNegocios) {
    console.log("Borrar ")
    console.log(evento)
    this._negocioService.deleteEventById(evento.idEventoNegocio)
    .subscribe( res => {
      console.log('done borrar');
     
    }
    ); 
    
    const i = this.eventosN.indexOf(evento);

    this.eventosN.splice(i, 1);
    
     
  }


  editar(eventos:any){
    
    const i= this.eventosN.indexOf(eventos.original)
    this.eventosN[i] = eventos.editado;
    
    this._negocioService.updateEvent(this.eventosN[i]).subscribe(
      res=> {
        this.getEventos();
      }
    );

    //this.getusuarios();
  }

  /*getUsuCockie() {
    
    this.serviceNegocio.getNegocioByCookie<Negocio>(this.negocioCockie)
    .subscribe((data: Negocio) => this.usuarioN = data,
      error => () => {
        console.log("Error");

      },
      ()=>{
        console.log("Exito");
        this.negociocargado= true;
      }
    );
  }*/

}
