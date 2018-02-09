import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Negocio } from '../../negocio';
import { ServiceService } from '../service.service';
import { UploadFileUsuService } from '../../fotos/fotos-usu/upload-file-usu.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'create-negocio',
  templateUrl: './create-negocio.component.html',
  styleUrls: ['./create-negocio.component.css']
})
export class CreateNegocioComponent implements OnInit {

  constructor(private router:Router,
    private _UsuarioserviceService: ServiceService,
    private uploadService: UploadFileUsuService) { }
  currentFileUpload: File
  selectedFiles: FileList
  nuevoNegocio = new Negocio();
  confirmPass: String="" ;
  passwordConNego:boolean = false;
  passwordCorrecta:boolean=false;
  negoEmail:Negocio;
  emailRepe:boolean=true;

  ngOnInit() {
  }

  volver(event){
    this.router.navigate(['/']);
   }



   passwordConf(event){
    this.confirmPass=event.target.value;
    
   
    
      if(this.confirmPass == ""){
        this.passwordConNego = true;
        
    
      }else{
        
        
        if(this.confirmPass== this.nuevoNegocio.passwordN){
          this.passwordCorrecta= false;
        }else{
          this.passwordCorrecta= true;
        }
        this.passwordConNego = false;
      }
    }

    crear(){

    this.currentFileUpload = this.selectedFiles.item(0)
    console.log("upload")
    this.nuevoNegocio.fotoN = this.currentFileUpload.name;
    //this.currentFileUpload.name = this.nuevoNegocio.nombreN.concat(this.currentFileUpload.name)
    console.log(this.nuevoNegocio.fotoN)
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log("Error")
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    })
    console.log(this.nuevoNegocio);
      this._UsuarioserviceService.createNegocio(this.nuevoNegocio).subscribe(res =>
          {
     
            this.router.navigate(['/']);
            
            
          });
    
          
      
     }


    email(event){
      
      this._UsuarioserviceService.getNegocioByEmail<Negocio>(this.nuevoNegocio)
          .subscribe((data:Negocio) => this.negoEmail = data,
            error => () => {
              console.log("Error email");
            },
            ()=> {
              
              console.log("Exito email");
              if(this.negoEmail== null){
                this.emailRepe= true;
                
              }else{
                this.emailRepe= false;
               
              }
            },
           
          );
          
    
     }

     file(event){
  
      //this.nuevoNegocio.fotoN = event.target.value;
      
      const file = event.target.files.item(0)
 
    if (file.type.match('image.*')) {
     
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
    
    }
}
