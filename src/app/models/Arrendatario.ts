export class Arrendatario {
    constructor(
        public id_arrendatario?: number | null,
        public nombre?: string | null,
        public username?: string | null,
        public apellido?: string | null,
        public telefono?: string | null,
        public correo?: string | null,
        public password?: string | null,
    ) {}
}
