import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'details-upload-nego',
  templateUrl: './details-upload-nego.component.html',
  styleUrls: ['./details-upload-nego.component.css']
})
export class DetailsUploadNegoComponent implements OnInit {
  @Input() fileUpload: string;
  constructor() { }

  ngOnInit() {
  }

}
