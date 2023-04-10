const express = requiere('express');
const app = express();

app.get('/', function(req, res){
    res.send('Buenas tardes')
})

app.listen(3000);