const express = require('express');
const app = express();

let TODO_LIST = [
    {
        id: 1,
        todo: "task1"
    },
    {
        id: 2,
        todo: "task2"
    },
    {
        id: 3,
        todo: "task3"
    }
];

app.use(express.json());

app.get('/list', (req, res) => {
    res.send(TODO_LIST);
});

app.post('/list', (req, res) => {

    const elementoNuevo = req.body;

    TODO_LIST.push(elementoNuevo);

    res.send(TODO_LIST);
});

app.get('/list/:id', (req, res) => {
    const idList = req.params.id;

    const elementoLista = TODO_LIST.find(element => element.id.toString() === idList)

    res.send(elementoLista);
});

app.put('/list/:id', (req, res) => {
    const idList = req.params.id;
    const {todo} = req.body;
    console.log(':D', todo);

    const elementoLista = TODO_LIST.find((element, indice) => {
        if (element.id.toString() === idList) {
            delete TODO_LIST[indice]
            element.todo = todo;
            TODO_LIST[indice] = element;
        }
    })
    res.send(TODO_LIST);
});

app.delete('/list/:id', (req, res) => {
    const idList = req.params.id;

    const listaFiltrada = TODO_LIST.filter(element => element.id.toString() !== idList);
    TODO_LIST = listaFiltrada
    res.send(TODO_LIST);
});

app.listen(3001, '', 1, () => {
    console.log('Ya quedo!!!')
})
