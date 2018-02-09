import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Negocio } from '../../negocio';
import { ServiceService } from '../../home/service.service';

@Component({
  selector: 'negocios-update',
  templateUrl: './negocios-update.component.html',
  styleUrls: ['./negocios-update.component.css']
})
export class NegociosUpdateComponent implements OnInit {

  @Input() Negocio:Negocio;
  @Output() negocioEditadoEvento = new EventEmitter;
  negocioEditar: Negocio = new Negocio();
  _negocioEditar: Negocio = new Negocio();
  passwordConNegocio:boolean = true;
  confirmPass: String="" ;
  passwordCorrecta:boolean=false;
  emailRepe:boolean=true;
  negoEmail:Negocio;

  constructor(private _NegocioserviceService: ServiceService,
  ) { }

  ngOnInit() {
    
    Object.assign(this.negocioEditar,this.Negocio);
    
  }

  password(event){
    this.passwordConNegocio = false;
  }
  passwordConf(event){
    this.confirmPass=event.target.value;
    
    
    
      if(this.confirmPass == ""){
        this.passwordConNegocio = false;
        
    
      }else{
        
        
        if(this.confirmPass== this._negocioEditar.passwordN){
          this.passwordCorrecta= false;
        }else{
          this.passwordCorrecta= true;
        }
        this.passwordConNegocio = true;
      }
    }
    
file(event){
  
  this.negocioEditar.fotoN = event.target.value;

}
email(event){
  
  this._NegocioserviceService.getUserByEmail<Negocio>(this.negocioEditar)
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



editar(){
 
  this.negocioEditar.editable=false;
  if(this._negocioEditar.passwordN ==""){
    this.negocioEditar.passwordN = this.Negocio.passwordN
  }else{
    this.negocioEditar.passwordN = this._negocioEditar.passwordN;
  }
  if (this.negocioEditar.fotoN == ""){
    this.negocioEditar.fotoN = this.Negocio.fotoN
  }else{
    this.negocioEditar.fotoN = this._negocioEditar.fotoN;
  }

  
  this.negocioEditadoEvento.emit({original: this.Negocio,editado:this.negocioEditar})
}

}
