import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _UsuarioserviceService: ServiceService,
    private router:Router,
    private cookieService: CookieService) { }

  ngOnInit() {
    
  
    if(this.cookieService.get('loginUsu') != 0){
      
      this.router.navigate(['HomePageU']);
    }

    if(this.cookieService.get('loginNegocio') != 0){
      
      this.router.navigate(['HomePageN']);
    }

  }

  private activoUsuario: boolean = false;
  private activoNegocio: boolean = false;
  private usuarios: Usuario[]
  private filter = false;

  

  rutaUsuarioA(event) {
    $("#exampleModal1").modal("hide");
    this.router.navigate(['registroUsuario']);
  };

  rutaNegocioA(event) {
    $("#exampleModal2").modal("hide");
    this.router.navigate(['registroNegocio']);
  };
  rutaUsuarioL(event) {
    if(this.activoUsuario== false)
      this.activoUsuario= true;
    else{
      this.activoUsuario = false
    }  
  };

  rutaNegocioL(event) {
    if(this.activoNegocio== false)
      this.activoNegocio= true;
    else{
      this.activoNegocio = false
    }  
  };

  UsuarioNegocio(event){
    this.filter = !this.filter;
    
  }
/*
  crear(usuario:Usuario){
    let user:Usuario = new Usuario(null,
      usuario.nombre,
      usuario.apellidos,
     usuario.email
    );
   
    this._UsuarioserviceService.createUser(user).subscribe(res =>
    {
      this.usuarios.push(user);
      
      
    });
    
  }*/

}
