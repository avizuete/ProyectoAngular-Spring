import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Negocio } from '../../negocio';
import { EventoNegocios } from './evento-negocios';

@Injectable()
export class EventoNegociosServiceService {

  private apiUrl = 'http://192.168.0.68:8080/eventonegocio';
  constructor(private _http :HttpClient) { }

  public getUsuarios<EventoNegocios>(negocio:Negocio): Observable<EventoNegocios> {
    
    return this._http.get<EventoNegocios>(this.apiUrl+"/eventos"+"/"+negocio.idNegocio);
}

create(evento: EventoNegocios): Observable<EventoNegocios> {
    
  return  this._http.post(this.apiUrl, evento)
 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

deleteEventById(id: number): Observable<boolean> {
  return this._http.delete(this.apiUrl + '/delete/' + id)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}

updateEvent(evento: EventoNegocios): Observable<EventoNegocios> {
  
  return this._http.put(this.apiUrl +  '/' + evento.idEventoNegocio,evento)
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
;
   

}

}
