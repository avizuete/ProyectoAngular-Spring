import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileUsuService } from '../upload-file-usu.service';
import { Usuario } from '../../../usuario';

@Component({
  selector: 'list-upload-usu',
  templateUrl: './list-upload-usu.component.html',
  styleUrls: ['./list-upload-usu.component.css']
})
export class ListUploadUsuComponent implements OnInit {
  @Input() Usuario:Usuario;
  showFile:boolean = false
  fileUploads: Observable<string[]>
  constructor(private uploadService: UploadFileUsuService) { }

  ngOnInit() {
    console.log("this.Usuario")
    console.log(this.Usuario)
    this.showFiles()
    console.log(this.showFile)
  }

  showFiles() {
   
      
      //this.fileUploads = this.uploadService.getFiles();
      this.fileUploads = this.uploadService.getFileUsu(this.Usuario.idUsuario);
      console.log(this.fileUploads)
      this.showFile= true;
    
  }

}
