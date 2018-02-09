import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventoUsuarios } from './evento-usuarios';
import { Usuario } from '../../usuario';
import { EventoNegocios } from '../evento-negocio/evento-negocios';
//import { EventoNegocios } from '../evento-negocio/evento-negocios';

@Injectable()
export class EventoUsuariosServiceService {

  constructor(private _http :HttpClient) { }
  private apiUrlNego = 'http://192.168.0.68:8080/eventonegocio';
  private apiUrlUsu = 'http://192.168.0.68:8080/eventousuario'

  getEventosName<EventoNegocios>(evento:EventoNegocios){
    return this._http.post(this.apiUrlNego+'/eventosNegocios' ,evento)
    /*.map((res:Response) => res.json())*/
    .catch((error:any) => Observable.throw(error.json().error || 'Error'));

  }

  getSaveEventoUsuario(evento:EventoUsuarios): Observable<EventoUsuarios> {
    return  this._http.post(this.apiUrlUsu, evento)
   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

getEventos<EventoUsuarios>(usuario:Usuario): Observable<EventoUsuarios> {
   return this._http.get<EventoUsuarios>(this.apiUrlUsu+"/"+usuario.idUsuario);
}

deleteEventoById(id: number): Observable<boolean> {
  return this._http.delete(this.apiUrlUsu + '/delete/'+ id)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}







}
