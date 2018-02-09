import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { ServiceEnviadoService } from '../../service-enviado.service';
import { Negocio } from '../../negocio';
import { CookieService } from 'ngx-cookie-service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'login-negocio',
  templateUrl: './login-negocio.component.html',
  styleUrls: ['./login-negocio.component.css']
})
export class LoginNegocioComponent implements OnInit {
  @Output() loginNegocioEvento = new EventEmitter;

  constructor(private router:Router,
    private service:ServiceService,
    private _UsuarioserviceService:ServiceService,
    private serviceEnviado:ServiceEnviadoService,
    private cookieService:CookieService) { }
  negociologin: Negocio = new Negocio();
  negocio:any={};

  negocioo: Negocio = new Negocio();
  error = '';


  ngOnInit() {
  }

  loginNegocio(event,formdata) {
    console.log("Loggiiiiinn")
    this.loginNegocioEvento.emit(this.negociologin);

    
      this._UsuarioserviceService.getNegocioByEmailandPassword<Negocio>(this.negociologin)
      .subscribe((data:Negocio) => this.negocioo = data,
        error => () => {
          console.log("Error");
        },
        ()=> {
          console.log(this.negocioo)
          
          if(this.negocioo == null){
            console.log("por aqui")
            this.error = 'Username or password is incorrect';
          }else{
            console.log("asdasda")
            console.log(this.negocioo)
            $("#exampleModal2").modal("hide");
            this.cookieService.set( 'loginNegocio', this.negocioo.idNegocio,3 );
            this.serviceEnviado.isNegocioLoggedIn = true;
            this.serviceEnviado.setData(this.negocioo)
            this.router.navigate(['HomePageN']);
            
          }
        },
       
      );
      
    
    
  }


}
