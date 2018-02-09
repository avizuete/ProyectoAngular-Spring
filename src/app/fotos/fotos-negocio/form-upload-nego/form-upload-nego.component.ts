import { Component, OnInit, Input } from '@angular/core';
import { Negocio } from '../../../negocio';
import { FotosNegocio } from '../fotos-negocio';
import { UploadFileNegoService } from '../upload-file-nego.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'form-upload-nego',
  templateUrl: './form-upload-nego.component.html',
  styleUrls: ['./form-upload-nego.component.css']
})
export class FormUploadNegoComponent implements OnInit {

  @Input() Negocio:Negocio;
  fotoNegocio = new FotosNegocio();
  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }
  constructor(private uploadService: UploadFileNegoService) { }

  ngOnInit() {
  }

  selectFile(event) {
    const file = event.target.files.item(0)
 
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }
 
  upload() {
    this.progress.percentage = 0;
    
    this.currentFileUpload = this.selectedFiles.item(0)
    console.log("upload")
    console.log(this.currentFileUpload)
    console.log(this.Negocio)
    this.fotoNegocio.titulo = this.currentFileUpload.name;
    this.fotoNegocio.url =this.currentFileUpload.name;
    this.fotoNegocio.negocio = this.Negocio;
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    })

    this.selectedFiles = undefined
    console.log(this.fotoNegocio)
    this.uploadService.saveFotosNego(this.fotoNegocio).subscribe(res =>
      {
 
        console.log('File is save uploaded!');
        
        
      });

  }
}
