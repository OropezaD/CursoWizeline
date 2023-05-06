const { createCarros } = require('../crearArchivo/createCarros.js');

const fs = require("fs");

const fsProm = fs.promises;
const newFileName = 'DatosObjeto.json';
const filePath = `./crearArchivo/${newFileName}`;

const leerCarros = async (file) => {
    const data = await (
        await fsProm.readFile(file, { encoding: "utf-8" })
    ).toString();

    let carrosNuevos = data.split('\n');
    let headers = carrosNuevos[0];

    const cabezeras = headers.split(',');

    const objetoCarros = [];

    for (let i = 1; i < carrosNuevos.length; i++) {
        let obj = {};
        const dataCarros = carrosNuevos[i].split(',');
        for (let j = 0; j < cabezeras.length; j++) {
            const key = cabezeras[j];
            obj[key] = dataCarros[j];
        }
        objetoCarros.push(obj);
    }

    return createCarros(filePath, JSON.stringify(objetoCarros));
}

module.exports = { leerCarros }