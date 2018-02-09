import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FotosNegocio } from './fotos-negocio';

@Injectable()
export class UploadFileNegoService {

  

  private apiUrl = 'http://192.168.0.68:8080';
  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
 
    formdata.append('file', file);
 
    const req = new HttpRequest('POST', this.apiUrl + '/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }
 
  getFiles(): Observable<any> {
    return this.http.get(this.apiUrl +'/getallfilesNegocio')
  }

  getFileNego(id:number): Observable<any> {
    return this.http.get(this.apiUrl +'/getallfilesNegocioById/'+id)
  }

  getFotoPerfilNego(id:number): Observable<any> {
    return this.http.get(this.apiUrl +'/getFotoNegocioPerfil/'+id)
  }

  getFile(): Observable<any> {
    return this.http.get(this.apiUrl +'/files/laporte.jpg')
  }

  

  saveFotosNego(fotosNegocio: FotosNegocio): Observable<FotosNegocio> {
    return  this.http.post(this.apiUrl+'/fotosnegocio',fotosNegocio)
   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

}
