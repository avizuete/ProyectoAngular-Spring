import { Usuario } from "../../usuario";

export class FotosUsuario {

    constructor(
        public idfotosUsuario: number = 0,
        public titulo:String = "",
        public url:String ="",
        public usuario:Usuario= new Usuario()

){}
}
