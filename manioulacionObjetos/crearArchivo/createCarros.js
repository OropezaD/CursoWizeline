const fs = require("fs");

const fsProm = fs.promises;

const createCarros = async (file, contenido) => {

    try {
        await fsProm.writeFile(file, contenido);
    } catch (e) {
        console.log(e);
    }

    return console.log('Ya lo cree');

}

module.exports = { createCarros }