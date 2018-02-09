import { Usuario } from "../usuario";
import { EventoNegocios } from "./evento-negocio/evento-negocios";



export class ValoracionEvento {
    
        constructor(
            public idValoracionEvento: number = 0,
            public nota:number = 0,
            public usuario:Usuario= new Usuario(),
            public eventonegocio:EventoNegocios = new EventoNegocios()
            
    
    ){}
    
}
