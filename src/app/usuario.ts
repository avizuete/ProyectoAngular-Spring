export class Usuario {
    constructor(
            public idUsuario: number = 0,
            public nombreU:String = "",
            public apellidosU:String ="",
            public emailU:String = "",
            public passwordU:String = "",
            public fotoPerfilU:String="",
            public superUser:boolean=false,
            public editable:boolean=false

    ){}
}