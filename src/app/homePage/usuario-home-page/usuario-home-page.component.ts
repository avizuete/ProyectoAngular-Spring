import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario';
import { ServiceEnviadoService } from '../../service-enviado.service';
import { ServiceService } from '../../home/service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UploadFileUsuService } from '../../fotos/fotos-usu/upload-file-usu.service';

@Component({
  selector: 'app-usuario-home-page',
  templateUrl: './usuario-home-page.component.html',
  styleUrls: ['./usuario-home-page.component.css']
})
export class UsuarioHomePageComponent implements OnInit {
  
  

  constructor(private serviceEnviado:ServiceEnviadoService, 
    private serviceUsuario:ServiceService,
    private cookieService: CookieService,
    private router:Router,
    private uploadService: UploadFileUsuService) { }

  Usuario:Usuario
  usuarioCockie= new Usuario();
  perfil:boolean=false;
  evento:boolean=false;
  foto:boolean=true;
  fileUpload: Observable<string>
  private usuarios: Usuario[]
  usuariocargado:boolean= false;
  ngOnInit() {
    console.log("Entraaa")
    if(this.cookieService.get('loginUsu') != 0){
      
      this.usuarioCockie.idUsuario = this.cookieService.get('loginUsu');
      
      
      this.getUsuCockie();

     
      
    }else{
      this.Usuario=this.serviceEnviado.getData()
      this.usuariocargado= true;
      if(this.Usuario){
        this.getFotoPerfil()
        }
    }
   

    
    this.getusuarios();

    
   
  }

  eventos(event){
    this.evento=true;
    this.perfil=false;
    this.foto=false;

  }
  fotos(event){
    this.evento=false;
    this.perfil=false;
    this.foto=true;

  }
  goPerfil(event){
    this.evento=false;
    this.perfil=true;
    this.foto=false;

  }

  getFotoPerfil() {
    this.fileUpload = this.uploadService.getFotoPerfilUsu(this.Usuario.idUsuario);
    console.log(this.fileUpload)
  }

  getusuarios(){
    this.serviceUsuario.getUsuarios<Usuario[]>()
    .subscribe((data: Usuario[]) => this.usuarios = data,
      error => () => {
        console.log("Error getusuarios");

      },
      ()=>{
        
        console.log("Exito getusuarios");

      }
    );
  }

  getUsuCockie() {
    this.serviceUsuario.getUserByCookie<Usuario>(this.usuarioCockie)
    .subscribe((data: Usuario) => this.Usuario = data,
      error => () => {
        console.log("Error getUsuCockie");

      },
      ()=>{
       
        console.log("Exito getUsuCockie");
        this.usuariocargado= true;
        if(this.Usuario){
          this.getFotoPerfil()
          }
      }
    );
  }

  editar(usuarios:any){
    
    
    const i= this.usuarios.indexOf(usuarios.original)
    //const i= 0;
    this.usuarios[i] = usuarios.editado;
    
    this.serviceUsuario.updateUser(this.usuarios[i]).subscribe(
      res=> {
        console.log("Exito")
      }
    );

}

logOut(evento){
  this.cookieService.delete('loginUsu')
  this.router.navigate(['/'])
}

}