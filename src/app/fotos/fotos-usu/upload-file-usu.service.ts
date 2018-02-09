import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FotosUsuario } from './fotos-usuario';


@Injectable()
export class UploadFileUsuService {

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
    return this.http.get(this.apiUrl +'/getallfilesUsuario')
  }

  getFileUsu(id:number): Observable<any> {
    return this.http.get(this.apiUrl +'/getallfilesUsuarioById/'+id)
  }

  getFotoPerfilUsu(id:number): Observable<any> {
    return this.http.get(this.apiUrl +'/getFotoUsuarioPerfil/'+id)
  }

  getFile(): Observable<any> {
    return this.http.get(this.apiUrl +'/files/laporte.jpg')
  }

  

  saveFotosUsu(fotosUsuario: FotosUsuario): Observable<FotosUsuario> {
    return  this.http.post(this.apiUrl+'/fotosusuario',fotosUsuario)
   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

 
}
