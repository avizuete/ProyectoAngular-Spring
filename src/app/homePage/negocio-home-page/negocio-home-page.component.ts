import { Component, OnInit } from '@angular/core';
import { Negocio } from '../../negocio';
import { ServiceEnviadoService } from '../../service-enviado.service';
import { ServiceService } from '../../home/service.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UploadFileNegoService } from '../../fotos/fotos-negocio/upload-file-nego.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-negocio-home-page',
  templateUrl: './negocio-home-page.component.html',
  styleUrls: ['./negocio-home-page.component.css']
})
export class NegocioHomePageComponent implements OnInit {
  

  Negocio:Negocio
  perfil:boolean=false;
  evento:boolean=false;
  foto:boolean=true;
  private negocios: Negocio[]
  negociocargado:boolean= false;
  negocioCockie= new Negocio();
  fileUpload: Observable<string>
  constructor(private serviceEnviado:ServiceEnviadoService,
    private serviceNegocios:ServiceService,
    private cookieService: CookieService,
    private router:Router,
    private uploadService: UploadFileNegoService) { }

  ngOnInit() {

    if(this.cookieService.get('loginNegocio') != 0){
      
      this.negocioCockie.idNegocio = this.cookieService.get('loginNegocio');
      
      
      this.getUsuCockie();
     
    }else{
      this.Negocio=this.serviceEnviado.getData()
      this.negociocargado= true;
      if(this.Negocio){
        this.getFotoPerfil()
        }
    }


   
    this.getNegocios()
  }

  eventos(event){
    this.evento=true;
    this.perfil=false;
    this.foto=false;


  }
  goPerfil(event){
    this.evento=false;
    this.perfil=true;
    this.foto=false;

  }

  fotos(event){
    this.evento=false;
    this.perfil=false;
    this.foto=true;

  }

  getFotoPerfil() {
    this.fileUpload = this.uploadService.getFotoPerfilNego(this.Negocio.idNegocio);
    console.log(this.fileUpload)
  }

  getNegocios(){
    this.serviceNegocios.getNegocios<Negocio[]>()
    .subscribe((data: Negocio[]) => this.negocios = data,
      error => () => {
        console.log("Error");

      },
      ()=>{
        
        console.log("Exito");
      }
    );
  }

  getUsuCockie() {
    this.serviceNegocios.getNegocioByCookie<Negocio>(this.negocioCockie)
    .subscribe((data: Negocio) => this.Negocio = data,
      error => () => {
        console.log("Error");

      },
      ()=>{
        
        this.negociocargado= true;
        if(this.Negocio){
          this.getFotoPerfil()
          }
      }
    );
  }

  editar(negocios:any){
    
    const i= this.negocios.indexOf(negocios.original)
    //const i= 0;
    this.negocios[i] = negocios.editado;
   
    this.serviceNegocios.updateNegocio(this.negocios[i]).subscribe(
      res=> {
        
      }
    );

}

logOut(evento){
  this.cookieService.delete('loginNegocio')
  this.router.navigate(['/'])
}

}
