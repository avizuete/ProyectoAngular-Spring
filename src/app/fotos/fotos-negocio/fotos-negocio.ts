import { Negocio } from "../../negocio";

export class FotosNegocio {
    constructor(
        public idfotosUsuario: number = 0,
        public titulo:String = "",
        public url:String ="",
        public negocio:Negocio= new Negocio()

){}
}
