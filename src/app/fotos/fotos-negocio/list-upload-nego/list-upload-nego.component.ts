import { Component, OnInit, Input } from '@angular/core';
import { UploadFileNegoService } from '../upload-file-nego.service';
import { Negocio } from '../../../negocio';
import { Observable } from 'rxjs';

@Component({
  selector: 'list-upload-nego',
  templateUrl: './list-upload-nego.component.html',
  styleUrls: ['./list-upload-nego.component.css']
})
export class ListUploadNegoComponent implements OnInit {
  @Input() Negocio:Negocio;
  showFile = false
  fileUploads: Observable<string[]>
  constructor(private uploadService: UploadFileNegoService) { }

  ngOnInit() {
    console.log("1212121212121")
    console.log(this.Negocio)
    this.showFiles()
  }

  showFiles() {
    
      
     
      this.fileUploads = this.uploadService.getFileNego(this.Negocio.idNegocio);
      console.log(this.fileUploads)
    
  }

}
