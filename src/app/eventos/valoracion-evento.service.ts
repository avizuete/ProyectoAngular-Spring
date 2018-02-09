import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValoracionEvento } from './valoracion-evento';
import { EventoNegocios } from './evento-negocio/evento-negocios';

@Injectable()
export class ValoracionEventoService {

  constructor(private _http :HttpClient) { }

  private apiUrlEventoNota = 'http://192.168.0.68:8080/valoracionEvento';


  getValoracionesEvento<ValoracionEvento>(valoracionEvento:ValoracionEvento){
    return this._http.post(this.apiUrlEventoNota+ "/verValoracion" ,valoracionEvento)
    .catch((error:any) => Observable.throw(error.json().error || 'Error'));

  }

  getSaveValoracionEvento(valoracionEvento:ValoracionEvento): Observable<ValoracionEvento> {
    return  this._http.post(this.apiUrlEventoNota, valoracionEvento)
   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

deleteValoracionEvento(id:number): Observable<ValoracionEvento> {
  return  this._http.delete(this.apiUrlEventoNota +"/delete/" +id)
 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

getEventos<ValoracionEvento>(): Observable<ValoracionEvento> {
  return this._http.get<ValoracionEvento>(this.apiUrlEventoNota);
}


getMedia<ValoracionEvento>(evento:EventoNegocios){
  return this._http.post(this.apiUrlEventoNota+'/media' ,evento)
  /*.map((res:Response) => res.json())*/
  .catch((error:any) => Observable.throw(error.json().error || 'Error'));

}

}
