import { Component, OnInit, Input } from '@angular/core';
import { UploadFileUsuService } from '../upload-file-usu.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { FotosUsuario } from '../fotos-usuario';
import { Usuario } from '../../../usuario';

@Component({
  selector: 'form-upload-usu',
  templateUrl: './form-upload-usu.component.html',
  styleUrls: ['./form-upload-usu.component.css']
})
export class FormUploadUsuComponent implements OnInit {
  @Input() Usuario:Usuario;
  fotoUsuario = new FotosUsuario();
  selectedFiles: FileList
  currentFileUpload: File
  id:any;
  progress: { percentage: number } = { percentage: 0 }
  constructor(private uploadService: UploadFileUsuService) { }

  ngOnInit() {
  }

  selectFile(event) {
    const file = event.target.files.item(0)
    console.log("1")
    //event.target.files.item(0).name = event.target.files.item(0).name.concat(this.Usuario.nombreU)
    console.log( event.target.files.item(0))
    console.log("2")
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
      console.log(this.selectedFiles)
      
    } else {
      alert('invalid format!');
    }
  }
 
  upload() {
    this.progress.percentage = 0;
    
    this.currentFileUpload = this.selectedFiles.item(0)
    console.log("upload")
    console.log(this.currentFileUpload)
    console.log(this.Usuario)
    
    this.fotoUsuario.titulo = this.currentFileUpload.name;
    this.fotoUsuario.url =this.currentFileUpload.name;
    this.fotoUsuario.usuario = this.Usuario;
    //this.id= this.Usuario.idUsuario;
    
    //this.fotoUsuario.url = this.id + this.fotoUsuario.url
    console.log(this.fotoUsuario.url)
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    })

    this.selectedFiles = undefined
    console.log(this.fotoUsuario)
   this.uploadService.saveFotosUsu(this.fotoUsuario).subscribe(res =>
      {
 
        console.log('File is save uploaded!');
        
        
      });

  }

}
