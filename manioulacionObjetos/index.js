const { leerCarros } = require('./leerArchivo/readCarros');

const EventEmitter = require('events');
const myEvent = new EventEmitter();

const testFolder = "./carros/";
const fileName = "datos.csv";
const filePath = `${testFolder}${fileName}`;
const express = require('express');
const app = express();
// Forma asíncrona

// app.use(express.json());

// app.get('/list', (req, res) => {
//   res.send(TODO_LIST);
// });

const readAsync = async (file) => {
  try {

    leerCarros(file);

  } catch (e) {

    console.log(e);

  }
};

readAsync(filePath);

app.listen(3001, '', 1, () => {
  console.log('Ya quedo!!!')
})