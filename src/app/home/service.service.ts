import { Injectable } from '@angular/core';
import { Usuario } from '../usuario';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Negocio } from '../negocio';

@Injectable()
export class ServiceService {

  private apiUrlUser = 'http://192.168.0.68:8080/usuario';
  private apiUrlNegocio = 'http://192.168.0.68:8080/negocio';
//private apiUrl = 'http://localhost:8080/usuario';

  constructor(private _http :HttpClient) { }

  createUser(user: Usuario): Observable<Usuario> {
    return  this._http.post(this.apiUrlUser, user)
   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

getUserByEmailandPassword<Usuario>(usuario:Usuario){
 
  return this._http.post(this.apiUrlUser+'/loginUsuario',usuario)
  .catch((error:any) => Observable.throw(error.json().error || 'Error'));

}

getUserByEmail<Usuario>(usuario:Usuario){
  return this._http.post(this.apiUrlUser+'/emailUsuario',usuario)
 .catch((error:any) => Observable.throw(error.json().error || 'Error'));

}

getUserByCookie<Usuario>(usuario:Usuario){
  console.log("cockie")
  return this._http.post(this.apiUrlUser+'/loginCockie' , usuario)
 .catch((error:any) => Observable.throw(error.json().error || 'Error'));

}

getNegocioByCookie<Negocio>(negocio:Negocio){
  return this._http.post(this.apiUrlNegocio+'/loginCockie' , negocio)
 .catch((error:any) => Observable.throw(error.json().error || 'Error'));

}

createNegocio(negocio: Negocio): Observable<Negocio> {
  return  this._http.post(this.apiUrlNegocio, negocio)
 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

getNegocioByEmailandPassword<Negocio>(negocio:Negocio){

return this._http.post(this.apiUrlNegocio+'/loginNegocio',negocio)
.catch((error:any) => Observable.throw(error.json().error || 'Error'));

}

getNegocioByEmail<Negocio>(negocio:Negocio){
return this._http.post(this.apiUrlNegocio+'/emailNegocio',negocio)
.catch((error:any) => Observable.throw(error.json().error || 'Error'));

}

getUsuarios<Usuario>(): Observable<Usuario> {
    
  return this._http.get<Usuario>(this.apiUrlUser);
}

getNegocios<Negocio>(): Observable<Negocio> {
    
  return this._http.get<Negocio>(this.apiUrlNegocio);
}

/*update(usuario:Usuario){
    
  return this._http.put(this.apiUrlUser+usuario.idUsuario,usuario)
  .map(data => data).toPromise()
}*/


updateUser(user: Usuario): Observable<Usuario> {
    
  return this._http.post(this.apiUrlUser +  '/update/' + user.idUsuario,user)
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
;
   

}

updateNegocio(nego: Negocio): Observable<Negocio> {

  return this._http.post(this.apiUrlNegocio +  '/update/' + nego.idNegocio,nego)
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
;
   

}
}
