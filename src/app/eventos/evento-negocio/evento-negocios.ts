import { Negocio } from "../../negocio";



export class EventoNegocios {
 constructor(
        public idEventoNegocio: number = 0,
        public nombre:String = "",
        public fecha:String ="",
        public descripcion:String="",
        public negocio:Negocio = new Negocio()

){}
}
