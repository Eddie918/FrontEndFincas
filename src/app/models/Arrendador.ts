export class Arrendador {
    constructor(
        public id_arrendador?: number | null,
        public username?: string | null,
        public calificacion?: number | null,
        public nombre?: string | null,
        public apellido?: string | null,
        public telefono?: string | null,
        public correo?: string | null,
        public password?: string | null,
        public role?: string | null
    ) {}
}
