import { EventoNegocios } from "../evento-negocio/evento-negocios";
import { Usuario } from "../../usuario";

export class EventoUsuarios {
    constructor(
        public idEventoUsuario: number = 0,
        public eventonegocio:EventoNegocios = new EventoNegocios(),
        public usuario:Usuario= new Usuario()

){}
}
