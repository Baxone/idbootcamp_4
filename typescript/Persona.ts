interface IPersona {
    name: string;
    age: number;
    saludar(): string;
}


class Persona implements IPersona {

    name: string;
    age: number = 40;

    constructor() {
        this.name = 'Juan Antonio'
    }

    saludar(): string {
        return 'Hola' + this.name;
    }
}