import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Usuario } from '../../usuario';
import { ServiceEnviadoService } from '../../service-enviado.service';
import { CookieService } from 'ngx-cookie-service';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.css']
})
export class LoginUsuariosComponent implements OnInit {

  @Output() loginUsuarioEvento = new EventEmitter;

  constructor(private router:Router,
    private _UsuarioserviceService:ServiceService,
    private serviceEnviado:ServiceEnviadoService,
    private cookieService:CookieService) { }

  usuariologin: Usuario = new Usuario();
  usuario:any={};

  usuarioo: Usuario = new Usuario();
  error = '';

  ngOnInit() {
  }


  loginUser(event) {
    
   
    this.loginUsuarioEvento.emit(this.usuariologin);

    
      this._UsuarioserviceService.getUserByEmailandPassword<Usuario>(this.usuariologin)
      .subscribe((data:Usuario) => this.usuarioo = data,
        error => () => {
          console.log("Error");
        },
        ()=> {
         
          
          if(this.usuarioo == null){
            
            this.error = 'Username or password is incorrect';
          }else{
            
            $("#exampleModal1").modal("hide");
            this.cookieService.set( 'loginUsu', this.usuarioo.idUsuario,3 );
            this.serviceEnviado.isUserLoggedIn = true;
            this.serviceEnviado.setData(this.usuarioo)
            this.router.navigate(['HomePageU']);
            
          }
        },
       
      );
      
     
      
      
  
    }
    
    


}
