import { Component, OnInit, Input } from '@angular/core';
import { Negocio } from '../../negocio';

@Component({
  selector: 'fotos-negocio',
  templateUrl: './fotos-negocio.component.html',
  styleUrls: ['./fotos-negocio.component.css']
})
export class FotosNegocioComponent implements OnInit {
  @Input() Negocio:Negocio;
  constructor() { }

  ngOnInit() {
    console.log("99999999")
    console.log(this.Negocio)
  }

}
