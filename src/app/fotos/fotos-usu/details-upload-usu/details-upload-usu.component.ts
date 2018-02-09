import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'details-upload-usu',
  templateUrl: './details-upload-usu.component.html',
  styleUrls: ['./details-upload-usu.component.css']
})
export class DetailsUploadUsuComponent implements OnInit {
  @Input() fileUpload: string;
  constructor() { }

  ngOnInit() {
  }

}
