import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../usuario';

@Component({
  selector: 'fotos-usu',
  templateUrl: './fotos-usu.component.html',
  styleUrls: ['./fotos-usu.component.css']
})
export class FotosUsuComponent implements OnInit {
  @Input() Usuario:Usuario;
  constructor() { }

  ngOnInit() {
    console.log("Meme")
    console.log(this.Usuario);
    console.log("Meme")
    
  }

}
