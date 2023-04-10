interface Persona {
    name: string
}

interface Apellido {
    name: string
}

let miObjeto: Persona = {name: 'hola'}
console.log(miObjeto.name);

function miFuncion(param1: any): Persona {

    return param1

}

miFuncion(miObjeto);

type FuncionX = (param1: string) => number

let func: FuncionX = function (param1: string) {
    return 1
}
