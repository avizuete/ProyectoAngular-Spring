import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Negocio } from '../../../negocio';
import { ServiceEnviadoService } from '../../../service-enviado.service';
import { EventoNegocios } from '../evento-negocios';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'nuevo-eventos-negocio',
  templateUrl: './nuevo-eventos-negocio.component.html',
  styleUrls: ['./nuevo-eventos-negocio.component.css']
})
export class NuevoEventosNegocioComponent implements OnInit {
  usuarioN:Negocio;
  @Input() Negocio:Negocio;
  nuevoEvento= new EventoNegocios();
  constructor(private serviceEnviado:ServiceEnviadoService,
    private cookieService: CookieService) { }
  @Output() crearNuevoEventoEvento = new EventEmitter();


  ngOnInit() {
    
    if(this.cookieService.get('loginNegocio') != 0){
      
      this.usuarioN=this.Negocio;
      
    }else{
      this.usuarioN=this.serviceEnviado.getData()
      
    }

    
  }

  crear(){

    this.crearNuevoEventoEvento.emit(this.nuevoEvento);

  }

}
