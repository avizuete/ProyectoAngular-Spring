import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Usuario } from '../../usuario';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';

import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { UploadFileUsuService } from '../../fotos/fotos-usu/upload-file-usu.service';
import { concat } from 'rxjs/observable/concat';

@Component({
  selector: 'create-usuarios',
  templateUrl: './create-usuarios.component.html',
  styleUrls: ['./create-usuarios.component.css']
})
export class CreateUsuariosComponent implements OnInit {

  nuevoUsuario = new Usuario();
  nombreUsua:boolean = false;
  apellidoUsua:boolean = false;
  emailUsua:boolean = false;
  passwordUsua:boolean = false;
  passwordConUsua:boolean = false;
  passwordCorrecta:boolean=false;
  emailRepe:boolean=true;
  usuEmail:Usuario;
  confirmPass: String="" ;
  //apellidoUsua:boolean = false;
  currentFileUpload: File
  selectedFiles: FileList
  private sub: any;
  @Output() crearNuevoUsuarioEvento = new EventEmitter();

  userForm: FormGroup;
  
  constructor( private router:Router,
    private _UsuarioserviceService: ServiceService,
    private uploadService: UploadFileUsuService) { }

  ngOnInit() { 
    
  }

  crear(){
    
    this.currentFileUpload = this.selectedFiles.item(0)
    console.log("upload")
    this.nuevoUsuario.fotoPerfilU = this.currentFileUpload.name;
    console.log("upload2")
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log("Error")
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    })
   
       this._UsuarioserviceService.createUser(this.nuevoUsuario).subscribe(res =>
      {
 
        this.router.navigate(['/']);
        /*this.usuarios.push(user);
        this.getusuarios();*/
        
      });

      /*
    this.crearNuevoUsuarioEvento.emit(this.nuevoUsuario);
    this.nuevoUsuario = new Usuario();*/
  
 }
 volver(event){
  this.router.navigate(['/']);
 }


 email(event){
  
  this._UsuarioserviceService.getUserByEmail<Usuario>(this.nuevoUsuario)
      .subscribe((data:Usuario) => this.usuEmail = data,
        error => () => {
          console.log("Error email");
        },
        ()=> {
          
          console.log("Exito email");
          if(this.usuEmail== null){
            this.emailRepe= true;
            
          }else{
            this.emailRepe= false;
           
          }
        },
       
      );
      

 }

 passwordConf(event){
this.confirmPass=event.target.value;



  if(this.confirmPass == ""){
    this.passwordConUsua = true;
    

  }else{
    
    
    if(this.confirmPass== this.nuevoUsuario.passwordU){
      this.passwordCorrecta= false;
    }else{
      this.passwordCorrecta= true;
    }
    this.passwordConUsua = false;
  }
}

file(event){

  const file = event.target.files.item(0)
 
    if (file.type.match('image.*')) {
     
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  
  
  

}

}
