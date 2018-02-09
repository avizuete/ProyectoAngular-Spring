import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../usuario';
import { ServiceService } from '../../home/service.service';

@Component({
  selector: 'usuarios-update',
  templateUrl: './usuarios-update.component.html',
  styleUrls: ['./usuarios-update.component.css']
})
export class UsuariosUpdateComponent implements OnInit {
  @Input() Usuario:Usuario;
  @Output() usuarioEditadoEvento = new EventEmitter;
  usuarioEditar: Usuario = new Usuario();
  _usuarioEditar: Usuario = new Usuario();
  passwordConUsua:boolean = true;
  confirmPass: String="" ;
  passwordCorrecta:boolean=false;
  emailRepe:boolean=true;
  usuEmail:Usuario;
  constructor(private _UsuarioserviceService: ServiceService) { }

  ngOnInit() {
   
    Object.assign(this.usuarioEditar,this.Usuario);
  
  }

  password(event){
    this.passwordConUsua = false;
  }
  passwordConf(event){
    this.confirmPass=event.target.value;
    
   
    
      if(this.confirmPass == ""){
        this.passwordConUsua = false;
        
    
      }else{
        
        
        if(this.confirmPass== this._usuarioEditar.passwordU){
          this.passwordCorrecta= false;
        }else{
          this.passwordCorrecta= true;
        }
        this.passwordConUsua = true;
      }
    }
    
file(event){
  
  this.usuarioEditar.fotoPerfilU = event.target.value;

}
email(event){
  
  this._UsuarioserviceService.getUserByEmail<Usuario>(this.usuarioEditar)
      .subscribe((data:Usuario) => this.usuEmail = data,
        error => () => {
          
        },
        ()=> {
          
          
          if(this.usuEmail== null){
            this.emailRepe= true;
            
          }else{
            this.emailRepe= false;
           
          }
        },
       
      );
      

 }



editar(){
  
  this.usuarioEditar.editable=false;
  if(this._usuarioEditar.passwordU ==""){
    this.usuarioEditar.passwordU = this.Usuario.passwordU
  }else{
    this.usuarioEditar.passwordU = this._usuarioEditar.passwordU;
  }
  if (this._usuarioEditar.fotoPerfilU == ""){
    this.usuarioEditar.fotoPerfilU = this.Usuario.fotoPerfilU
  }else{
    this.usuarioEditar.fotoPerfilU = this._usuarioEditar.fotoPerfilU;
  }

  
  this.usuarioEditadoEvento.emit({original: this.Usuario,editado:this.usuarioEditar})
}
}
